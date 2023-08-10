

import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../redux/actions/counterActions";

const Counter = () => {

    const count = useSelector(state => state.count)

    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch(incrementCounter())
    }
    const handleDecrement =()=>{
        dispatch(decrementCounter())
    }
    const handleReset =()=>{
        dispatch(resetCounter())
    }

    return (
        <div className="border bg-base-200 shadow-2xl max-w-md h-40 text-center rounded-lg mx-auto mt-10">
            
            <h2 className="text-2xl font-semibold mt-4">Count Value: {count}</h2>

            <div className="space-x-2 mt-4">
                <button onClick={handleIncrement} className="bg-sky-400 px-2 py-1 rounded-sm">Increment</button>
                <button onClick={handleDecrement} className="bg-violet-400 px-2 py-1 rounded-sm">Decrement</button>
                <button onClick={handleReset} className="bg-pink-400 px-2 py-1 rounded-sm">Reset</button>
            </div>
        </div>
    );
};

export default Counter;