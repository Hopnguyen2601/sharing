import './styles.scss';

const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        name={name}
        value={value}
        className="text-area"
      ></textarea>
    </div>
  );
};

export default TextareaField;
