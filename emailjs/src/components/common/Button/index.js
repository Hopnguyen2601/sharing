import './styles.scss';

const Button = (props) => {
  const { type } = props;

  return (
    <button type={type} className="btn">
      Send Us
    </button>
  );
};

export default Button;
