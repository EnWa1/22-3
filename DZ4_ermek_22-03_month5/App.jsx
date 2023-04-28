import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, changeName } from './store/actions';

function App() {
    const count = useSelector((state) => state.counter.count);
    const name = useSelector((state) => state.name.name);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increaseCount(1));
    };

    const handleDecrease = () => {
        dispatch(decreaseCount(1));
    };

    const handleChangeName = (e) => {
        dispatch(changeName(e.target.value));
    };

    const [countValue, setCountValue] = useState(1);

    const handleCountChange = (e) => {
        setCountValue(e.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Counter App</h1>
                </div>
                <div className="content">
                    <input type="text" onChange={handleChangeName} placeholder="Enter your name" />
                    <h4 className="name">My name: {name}</h4>
                    <h4 className="count">Counter: {count}</h4>
                    <div className="count-input">
                        <input type="number" value={countValue} onChange={handleCountChange} />
                        <div className="count-buttons">
                            <button onClick={() => dispatch(increaseCount(countValue))}>+</button>
                            <button onClick={() => dispatch(decreaseCount(countValue))}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
