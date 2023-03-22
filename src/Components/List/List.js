import React from 'react';

const List = ({ tasks, searchText, handleDelete }) => {
    const filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    {task.task}
                    <button onClick={() => handleDelete(task.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}

export default List;
