const Input = ({
  label,
  name,
  type = "text",
  className = "",
  required,
  value,
  onChange,
}) => {
  return (
    <div className="d-flex flex-column gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={`${className} p-2`}
      />
    </div>
  );
};

export default Input;
