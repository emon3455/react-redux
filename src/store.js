import { applyMiddleware, createStore } from "redux"
import todosReducer from "./redux/reducers/todosReducer";
import thunk from "redux-thunk";
// import counterReducer from "./redux/reducers/counterReducer"



// const store = createStore(counterReducer);

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;