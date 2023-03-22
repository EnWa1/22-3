import React from 'react';

const TaskList = ({tasks}) => {
    return (
        <ul>
            {tasks.map(task => <li key={task.id}>{task.task}</li>)}
        </ul>
    );
}

export default TaskList;
