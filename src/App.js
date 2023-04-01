import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // добавлено состояние для фильтрации

  // получение данных из localStorage и сохранение в состояние
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  // сохранение данных в localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleShow = () => setShow(!show);

  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDone = (task) => {
    setTasks(
        tasks.map((t) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        )
    );
  };

  const handleEdit = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    setCurrentEdit(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClearAll = () => {
    setTasks([]);
    localStorage.clear(); // удаление данных из localStorage
  };

  const [currentEdit, setCurrentEdit] = useState(null);

  return (
      <div className='App'>
        <h1>Todo App</h1>
        <Button handleClick={handleShow}>Добавить таск</Button>
        <select value={filter} onChange={handleFilterChange}>
          <option value='all'>Все таски</option>
          <option value='completed'>Выполненные</option>
          <option value='incompleted'>Не выполненные</option>
        </select>
        <Button handleClick={handleClearAll}>Очистить все таски</Button>
        <TaskList
            list={tasks}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleEdit={handleEdit}
            filter={filter}
        />
        {show && (
            <Modal
                handleShow={handleShow}
                handleChangeCheck={handleChangeCheck}
                handleAdd={handleAdd}
            />
        )}
      </div>
  );
}

export default App;
