

const Input = ({ name, placeholder, value, handleChange }) => {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(event) => handleChange(event.target.value)}
        />
    );
};

export default Input;
