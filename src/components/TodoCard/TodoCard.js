import React, { useState } from 'react';
import classes from './todocard.module.css';

const TodoCard = ({
                      task,
                      handleDelete,
                      handleDone,
                      handleEdit,
                      handleSelectCurrent,
                      iEdit,
                  }) => {
    const [newTitle, setNewTitle] = useState(task.title);
    const [isEditing, setIsEditing] = useState(false);

    const cardClassName = isEditing
        ? `${classes.todoCard} ${classes.editing}`
        : `${classes.todoCard} ${task.completed ? classes.completed : ''}`;

    if (isEditing) {
        return (
            <div className={cardClassName}>
                <input
                    name="edit"
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <button
                    onClick={() => {
                        handleEdit({ ...task, title: newTitle });
                        setIsEditing(false);
                    }}
                >
                    Save
                </button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        );
    } else {
        return (
            <div className={`${classes.todoCard} ${task.completed ? classes.done : ''}`}>
                <h5>{task.title}</h5>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => handleDone(task.id)}>Done</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
        );
    }
};


export default TodoCard;
