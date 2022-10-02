import classes from "./Input.module.css";
function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* {...props.input}: All the key value pair are added as props to iNPUT */}
    </div>
  );
}
export default Input;
