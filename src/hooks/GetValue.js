import React, { useContext } from 'react'
import { Context } from './UseContextHooks'
const GetValue = () => {
    const counterContext = useContext(Context)
    const { store } = counterContext
    return (
        <div>{store}e</div>
    )
}

export default GetValue