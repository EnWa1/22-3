import React from 'react';

const Input = ({ name, onChangeFunc, value }) => {
    return <input name={name} onChange={onChangeFunc} value={value} />;
};

export default Input;
