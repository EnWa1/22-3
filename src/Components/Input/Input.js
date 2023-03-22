const Input = ({ name, placeholder, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};

export default Input;