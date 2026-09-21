interface NotesContainerProps {
  children: React.ReactNode;
}

const Notes = (props: NotesContainerProps) => {
  return <div className="notes-section">{props.children}</div>;
};

export default Notes;
