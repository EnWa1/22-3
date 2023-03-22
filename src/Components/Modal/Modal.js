import React, { useState } from 'react';
import classes from './modal.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Modal = ({ handleShow, handleAddTask }) => {
    const [text, setText] = useState('');

    const handleChangeText = (textInput) => {
        setText(textInput);
    };

    return (
        <React.Fragment>
            <div className={classes.modalWrapper} onClick={handleShow} />
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>Закрыть модалку</Button>
                <Input
                    name="add"
                    placeholder="Добавьте таск"
                    value={text}
                    handleChange={handleChangeText}
                />
                <Button handleClick={() => handleAddTask(text)}>Добавить таск</Button>
            </div>
        </React.Fragment>
    );
};

export default Modal;
