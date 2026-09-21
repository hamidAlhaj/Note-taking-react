interface MessageProps {
  title: string;
}
const Message = (props: MessageProps) => (
  <h2 className="center">{props.title}</h2>
);

export default Message;
