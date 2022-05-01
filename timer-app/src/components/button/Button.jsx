import "./Button.css";

export const Button = (props) => {
  return (
    <button onClick={props.handle} className={props.color}>
      {props.name}
    </button>
  );
};
