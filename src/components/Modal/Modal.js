import React from 'react';
import classes from './modal.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Modal = ({ handleShow, handleChangeCheck, handleAdd }) => {
    return (
        <>
            <div className={classes.modalWrapper} onClick={handleShow}></div>
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>Закрыть модалку</Button>

                <Input name={'add'} onChangeFunc={handleChangeCheck} />

                <Button handleClick={() => {
                    handleAdd();
                    handleShow(false);
                }}>Добавить таск</Button>
            </div>
        </>
    );
};

export default Modal;
