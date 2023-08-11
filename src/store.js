import { applyMiddleware, combineReducers, createStore } from "redux"
import todosReducer from "./redux/reducers/todosReducer";
import thunk from "redux-thunk";
import counterReducer from "./redux/reducers/counterReducer";



// const store = createStore(counterReducer);

const rootReducer = combineReducers({
    counterR: counterReducer,
    todosR: todosReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;