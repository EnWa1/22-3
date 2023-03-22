import { useState } from 'react';
import './App.css';
import Modal from './сomponents/Modal/Modal';
import Button from './сomponents/Button/Button';
import List from './сomponents/List/List';
import Input from './сomponents/Input/Input';

function App() {
    const [show, setShow] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [addText, setAddText] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'coding',
        },
        {
            id: 2,
            task: 'eat',
        },
        {
            id: 3,
            task: 'sleep',
        },
    ]);

    const handleShow = () => setShow(!show);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleAddTextChange = (event) => {
        setAddText(event.target.value);
    };

    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            task: addText,
        };
        setTasks([...tasks, newTask]);
        setAddText('');
    };

    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            {show && (
                <Modal handleShow={handleShow}>
                    <Input
                        name="add"
                        placeholder="Добавьте таск"
                        onChange={handleAddTextChange}
                        value={addText}
                    />
                    <Button handleClick={handleAddTask}>Добавить таск</Button>
                </Modal>
            )}
            <Button handleClick={handleShow}>Открыть модалку</Button>
            <Input
                name="search"
                placeholder="Поиск"
                onChange={handleSearchTextChange}
            />
            <List tasks={tasks} searchText={searchText} handleDelete={handleDelete} />
        </div>
    );
}

export default App;
