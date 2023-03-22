import { useState } from 'react';
import './App.css';
import Modal from './Сomponents/Modal/Modal';
import Button from './Сomponents/Button/Button';
import Input from "./Сomponents/Input/Input";
function App() {
    const [tasks, setTasks] = useState([
        { id: 1, task: 'coding' },
        { id: 2, task: 'eat' },
        { id: 3, task: 'sleep' },
    ]);

    const [searchValue, setSearchValue] = useState('');
    const [addValue, setAddValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleAddChange = (event) => {
        setAddValue(event.target.value);
    };

    return (
        <div>
            <h1>My Task List</h1>
            <Modal>
                <Input name="add" placeholder="Add task..." onChange={handleAddChange} value={addValue} />
            </Modal>
            <Input name="search" placeholder="Search tasks..." onChange={handleSearchChange} value={searchValue} />
            <List tasks={tasks} />
        </div>
    );
}

export default App;