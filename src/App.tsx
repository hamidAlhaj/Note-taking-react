import { useState, useEffect } from "react";
import { Note } from "./types";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";
import NotesContainer from "./components/Notes/NotesContainer";
import NotesList from "./components/Notes/NotesList";
import NoteItem from "./components/Notes/Note";
import NoteForm from "./components/Notes/NoteForm";
import Preview from "./Preview";
import Message from "./components/Message";
import Alert from "./components/Alert/Alert";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [creating, setCreating] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<string[]>();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    if (validationErrors && validationErrors.length !== 0) {
      setTimeout(() => {
        setValidationErrors([]);
      }, 3000);
    }
  }, [validationErrors]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const saveToLocalStorage = (name: string, item: unknown) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  const validate = (): boolean => {
    const validationErrors = [];
    let passed = true;
    if (!title) {
      validationErrors.push("الرجاء إدخال عنوان الملاحظة");
      passed = false;
    }
    if (!content) {
      validationErrors.push("الرجاء إدخال محتوى الملاحظة");
      passed = false;
    }
    setValidationErrors(validationErrors);
    return passed;
  };

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const changeContentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const addNoteHandler = () => {
    setCreating(true);
    setTitle("");
    setContent("");
    setEditing(false);
  };

  const selectNoteHandler = (noteId: number) => {
    setSelectedNote(noteId);
    setCreating(false);
    setEditing(false);
  };

  const saveNoteHandler = () => {
    if (!validate()) return;
    const note: Note = {
      id: Number(new Date()),
      title: title,
      content: content,
    };
    const updatedNotes = [...notes, note];
    saveToLocalStorage("notes", updatedNotes);
    setNotes(updatedNotes);
    setTitle("");
    setContent("");
    setCreating(false);
    setSelectedNote(note.id);
  };

  const deleteNoteHandler = (noteId: number) => {
    const updatedNotes = [...notes];
    const noteIndex = updatedNotes.findIndex((note) => note.id === noteId);
    updatedNotes.splice(noteIndex, 1);
    saveToLocalStorage("notes", updatedNotes);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const editNoteHandler = (noteId: number) => {
    const note = notes.find((note) => note.id === noteId);
    if (!note) return;

    setEditing(true);
    setTitle(note.title);
    setContent(note.content);
  };

  const updateNoteHandler = () => {
    if (!validate()) return;
    if (selectedNote === null) return;

    const updatedNotes = [...notes];
    const noteIndex = notes.findIndex((note) => note.id === selectedNote);
    updatedNotes[noteIndex] = {
      id: selectedNote,
      title: title,
      content: content,
    };
    saveToLocalStorage("notes", updatedNotes);

    setNotes(updatedNotes);
    setEditing(false);
    setTitle("");
    setContent("");
  };

  const getAddNote = () => {
    return (
      <NoteForm
        formTitle="ملاحظة جديدة"
        title={title}
        content={content}
        titleChanged={changeTitleHandler}
        contentChanged={changeContentHandler}
        submitText="حفظ"
        submitClicked={saveNoteHandler}
      />
    );
  };

  const getPreview = () => {
    if (notes.length === 0) {
      return <Message title="لا يوجد ملاحظات" />;
    }

    if (!selectedNote) {
      return <Message title="الرجاء اختيار ملاحظة" />;
    }

    const note = notes.find((note) => note.id === selectedNote);

    if (!note) {
      return <Message title="الملاحظة غير موجودة" />;
    }

    let noteDisplay = (
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );

    if (editing) {
      noteDisplay = (
        <NoteForm
          formTitle="تعديل ملاحظة"
          title={title}
          content={content}
          titleChanged={changeTitleHandler}
          contentChanged={changeContentHandler}
          submitText="تعديل"
          submitClicked={updateNoteHandler}
        />
      );
    }

    return (
      <div>
        {!editing && (
          <div className="note-operations">
            <a href="#" onClick={() => editNoteHandler(note.id)}>
              <i className="fa fa-pencil-alt" />
            </a>
            <a href="#" onClick={() => deleteNoteHandler(note.id)}>
              <i className="fa fa-trash" />
            </a>
          </div>
        )}
        {noteDisplay}
      </div>
    );
  };

  return (
    <div className="App">
      <NotesContainer>
        <div
          className={`theme-toggle-btn ${darkMode ? "night" : "day"}`}
          onClick={toggleDarkMode}
        >
          <div className="toggle-text">
            {darkMode ? "NIGHTMODE" : "DAYMODE"}
          </div>
          <div className="toggle-knob">{darkMode ? <FaMoon /> : <FaSun />}</div>
        </div>
        <NotesList>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              title={note.title}
              active={selectedNote === note.id}
              noteClicked={() => selectNoteHandler(note.id)}
            />
          ))}
        </NotesList>
        <button className="add-btn" onClick={addNoteHandler}>
          +
        </button>
      </NotesContainer>
      <Preview>{creating ? getAddNote() : getPreview()}</Preview>

      {validationErrors && validationErrors.length !== 0 && (
        <Alert validationMessages={validationErrors} />
      )}
    </div>
  );
}

export default App;
