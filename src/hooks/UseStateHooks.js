import React, { useState } from 'react';

function UseStateHooks() {
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);

    // return (
    //     <>
    //         <div>

    //         </div>
    //         <p>Name {name} </p>
    //         <input
    //             type="text"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //     </>

    const [Name, setName] = useState("")

    const [formDetails, setFormDetails] = useState({
        firstName: "",
        lastName: "",
        MobileNumber: "",
    })

    return (
        <div>
            <p>Name {Name}</p>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <p>You clicked {count} times</p>
            <button
                // onClick={() => {
                // setCount(prevValue => prevValue + 1)
                // }}
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
            <p>FirstName {formDetails.firstName}</p>
            <input type="text" value={formDetails.firstName} onChange={(e) => {
                setFormDetails({
                    ...formDetails,
                    firstName: e.target.value
                })
            }} />
            <p>LastName {formDetails.lastName}</p>
            <input type="text" value={formDetails.lastName} onChange={(e) => {
                setFormDetails({
                    ...formDetails,
                    lastName: e.target.value
                })
            }} />
            <p>MobileNumber {formDetails.MobileNumber}</p>
            <input type="text" value={formDetails.MobileNumber} onChange={(e) => {
                setFormDetails({
                    ...formDetails,
                    MobileNumber: e.target.value
                })
            }} />
        </div>

    );
}
export default UseStateHooks;  