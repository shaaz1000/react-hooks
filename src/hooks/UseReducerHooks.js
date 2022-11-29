import React, { useReducer } from 'react'

const UseReducerHooks = () => {
    const initialState = 0
    // const initState = {
    //     counter1: 0,
    //     counter2: 5
    // }

    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1
                return { ...state, counter1: state.counter1 + 1, counter2: state.counter2 + 5 }
            case "decrement":
                return state - 1

                return { ...state, counter1: state.counter1 - 1, counter2: state.counter2 - 5 }
            case "reset":

                return initialState
                return { ...state, counter1: 0, counter2: 5 }
            default:
                return state

        }
    }
    // useReducer((<Reducer Function>,initialStore))

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{count}</div>
            {/* <div>{count.counter2}</div> */}
            <button
                onClick={() => dispatch("increment")}
            >Increment</button>
            <button
                onClick={() => dispatch("decrement")}
            >Decrement</button>

            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default UseReducerHooks