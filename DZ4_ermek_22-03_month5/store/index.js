import { createStore, combineReducers } from 'redux'
import { counterReducer } from './CounterReducer'
import { nameReducer } from './NameReducer'

const rootReducer = combineReducers({
    name: nameReducer,
    counter: counterReducer,
})

const store = createStore(rootReducer)

export default store
