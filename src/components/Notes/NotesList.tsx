interface NotesListProps {
  children: React.ReactNode;
}
const NotesList = (props: NotesListProps) => {
  return <ul className="notes-list">{props.children}</ul>;
};

export default NotesList;
