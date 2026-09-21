interface NoteProps {
  title: string;
  active: boolean;
  noteClicked: () => void;
}
const Note = (props: NoteProps) => {
  const { title, noteClicked, active } = props;
  const classes = ["note-item"];
  if (active) {
    classes.push("active");
  }
  return (
    <li className={classes.join(" ")} onClick={noteClicked}>
      {title}
    </li>
  );
};

export default Note;
