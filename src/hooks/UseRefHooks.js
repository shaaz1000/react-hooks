// If we tried to count how many times our application 
// renders using the useState Hook, we would be caught in
//     an infinite loop since this Hook itself causes a re - render.

// To avoid this, we can use the useRef Hook.

import { useState, useEffect, useRef } from "react";


export default function UseRefHooks() {
    // const [inputValue, setInputValue] = useState("");
    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")
    const pin1Ref = useRef()
    const pin2Ref = useRef()
    const pin3Ref = useRef()
    const pin4Ref = useRef()
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });

    return (
        <>
            {/* <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1> */}
            <div>
                <input
                    type="text"
                    value={pin1}
                    onChange={(e) => {
                        setPin1(e.target.value)
                        if (e.target.value !== "") {
                            pin2Ref.current.focus()
                        }
                    }}
                    ref={pin1Ref}
                    maxLength={1}
                />
                <input
                    type="text"
                    value={pin2}
                    onChange={(e) => {
                        setPin2(e.target.value)
                        if (e.target.value !== "") {
                            pin3Ref.current.focus()
                        }
                        if (e.target.value == "" || e.target.value == null) {
                            pin1Ref.current.focus()
                        }
                    }}
                    ref={pin2Ref}
                    maxLength={1}
                />
                <input
                    type="text"
                    value={pin3}
                    onChange={(e) => {
                        setPin3(e.target.value)
                        if (e.target.value !== "") {
                            pin4Ref.current.focus()
                        }
                        if (e.target.value == "" || e.target.value == null) {
                            pin2Ref.current.focus()
                        }
                    }}
                    ref={pin3Ref}
                    maxLength={1}
                />
                <input
                    type="text"
                    value={pin4}
                    onChange={(e) => {
                        setPin4(e.target.value)
                        if (e.target.value == "" || e.target.value == null) {
                            pin3Ref.current.focus()
                        }
                    }}
                    ref={pin4Ref}
                    maxLength={1}
                />
            </div>

        </>
    );
}