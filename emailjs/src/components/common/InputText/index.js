import './styles.scss';

const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="input-text"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </div>
  );
};

export default InputField;
