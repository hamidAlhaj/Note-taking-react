interface NotesProps {
  children: React.ReactNode;
}

const Notes = (props: NotesProps) => {
  return <div className="notes-section">{props.children}</div>;
};

export default Notes;
