import css from "./Form.module.css";

const Form = () => {
  return (
    <div className={css.Form}>
      <label htmlFor="ip" id="form-ip">Ip</label>
      <input className={css.Input} id="ip" type="text" />
      <label htmlFor="port" id="form-port">Port</label>
      <input className={css.InputPort} id="port" type="text" />
    </div>
  );
};

export default Form;
