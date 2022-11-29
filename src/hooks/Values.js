import React, { useContext } from 'react'
import { Context } from './UseContextHooks'
const Values = () => {
    const CounterContext = useContext(Context)
    const { store, dispatch } = CounterContext
    return (
        <div>Values {store}
            <button
                onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    )
}

export default Values