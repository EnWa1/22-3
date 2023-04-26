import React from "react";
import { createStore    } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
    fullName: "",
    age: 0,
    gender: "",
};

const setFullName = (fullName) => {
    return { type: "SET_FULL_NAME", payload: fullName };
};

const setAge = (age) => {
    return { type: "SET_AGE", payload: age };
};

const setGender = (gender) => {
    return { type: "SET_GENDER", payload: gender };
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FULL_NAME":
            return { ...state, fullName: action.payload };
        case "SET_AGE":
            return { ...state, age: action.payload };
        case "SET_GENDER":
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};
const store = createStore(formReducer);

const FormComponent = () => {
    const form = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleFullNameChange = (e) => {
        dispatch(setFullName(e.target.value));
    };

    const handleAgeChange = (e) => {
        dispatch(setAge(e.target.value));
    };

    const handleGenderChange = (e) => {
        dispatch(setGender(e.target.value));
    };

    return (
        <div>
            <h1>Form</h1>
            <form>
                <label>
                    Full Name:
                    <input type="text" value={form.fullName} onChange={handleFullNameChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={form.age} onChange={handleAgeChange} />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={form.gender} onChange={handleGenderChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </form>
            <div>
                <h2>Form Data</h2>
                <p>Full Name: {form.fullName}</p>
                <p>Age: {form.age}</p>
                <p>Gender: {form.gender}</p>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <FormComponent />
        </Provider>
    );
};

export default App;

