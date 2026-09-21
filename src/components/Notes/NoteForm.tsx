interface NoteFormProps {
  formTitle: string;
  title: string;
  content: string;
  titleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contentChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitClicked: () => void;
  submitText: string;
}

const NoteForm = (props: NoteFormProps) => {
  const {
    formTitle,
    title,
    content,
    titleChanged,
    contentChanged,
    submitClicked,
    submitText,
  } = props;
  return (
    <div>
      <h2>{formTitle}</h2>
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="العنوان"
          value={title}
          onChange={titleChanged}
        />

        <textarea
          rows={10}
          name="content"
          className="form-input"
          placeholder="النص"
          onChange={contentChanged}
          value={content}
        />

        <a href="#" className="button green" onClick={submitClicked}>
          {submitText}
        </a>
      </div>
    </div>
  );
};

export default NoteForm;
