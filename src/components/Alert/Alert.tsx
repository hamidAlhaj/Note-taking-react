interface AlertProps {
  validationMessages: string[];
}
const Alert = (props: AlertProps) => {
  return (
    <div className="alert-container">
      <ul>
        {props.validationMessages.map((message: string, index: number) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alert;
