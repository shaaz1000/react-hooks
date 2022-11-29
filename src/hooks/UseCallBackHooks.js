// The React useCallback Hook returns a memoized callback function.

// Think of memoization as caching a value so that it does not need to be recalculated.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// This can improve performance.


// The useCallback and useMemo Hooks are similar.
// The main difference is that useMemo returns a memoized value and
//  useCallback returns a memoized function.


import { useState, useCallback } from "react";
import Todos from "./Todos";

export default function UseCallBackHooks() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};