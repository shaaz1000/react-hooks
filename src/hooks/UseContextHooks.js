import React, { useReducer, createContext } from 'react'
import GetValue from './GetValue'
import Values from './Values'
export const Context = createContext()


// createContext 
// Wrap it in a provider
// access the value using useContext
const UseContextHooks = () => {
    const initState = {
        counter: 1,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                // return state + 1
                return { ...state, counter: state.counter + 1 }
            case "decrement":
                return { ...state, counter: state.counter - 1 }
            case "reset":
                return { ...state, counter: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={{ store: state.counter, dispatch }}>
            <Values />
            <GetValue />
        </Context.Provider>
    )
}

export default UseContextHooks