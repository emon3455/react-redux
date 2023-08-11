import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions/todosActions";


const ToDos = () => {

    const {isLoading, todos, error} = useSelector(state=> state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos())
    },[dispatch])

    return (
        <div>
            {error && <h2>{error.message}</h2>}
            {isLoading && <h2>Loading....</h2>}
            {
                todos && <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {
                        todos.map((todo)=> <div key={todo.id} className="border-2 border-sky-500 p-2">
                            <h4>Todo Id: {todo.id}</h4>
                            <h4>Title: {todo.title}</h4>
                            <h4>Status: <span className={`${todo.completed ? "text-green-500" : "text-red-500"}`}>{todo.completed ? "Completed" : "Not Completed"}</span></h4>
                        </div>)
                    }
                </section>
            }
        </div>
    );
};

export default ToDos;