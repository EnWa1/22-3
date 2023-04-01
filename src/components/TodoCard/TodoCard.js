import React, { useState } from 'react';
import classes from './todocard.module.css';
import ButtonAction from '../ButtonAction/ButtoanAction';

const TodoCard = ({
                      task,
                      handleDelete,
                      handleDone,
                      handleEdit,
                      handleSelectCurrent,
                      iEdit,
                  }) => {
    const [newTitle, setNewTitle] = useState(task.title);

    const handleCancelEdit = () => {
        setNewTitle(task.title);
        handleSelectCurrent(null);
    };

    if (iEdit) {
        return (
            <div>
                <input
                    name='edit'
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <button onClick={() => handleEdit({ ...task, title: newTitle })}>
                    Save
                </button>
                <button onClick={handleCancelEdit}>Cancel</button>
            </div>
        );
    }

    return (
        <div
            className={classes.todoCard}
            style={task.completed ? { textDecoration: 'line-through' } : null}
        >
            <div className={classes.title} onClick={() => handleSelectCurrent(task)}>
                {task.title}
            </div>
            <ButtonAction
                type='done'
                onClick={() => handleDone(task)}
                completed={task.completed}
            />
            <ButtonAction type='edit' onClick={() => handleSelectCurrent(task)} />
            <ButtonAction type='delete' onClick={() => handleDelete(task.id)} />
        </div>
    );
};

export default TodoCard;
