
const List = ({ tasks, searchText }) => {
    const filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>{task.task}</li>
            ))}
        </ul>
    );
}

export default List;
