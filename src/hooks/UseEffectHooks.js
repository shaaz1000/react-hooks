import { useState, useEffect } from "react";


function UseEffectHooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        // return acts as a componentWillUnmount , used mostly with the eventListeners 
        return () => clearTimeout(timer);
    }, [name]);

    // useEffect(<function>,[empty or dependency array])

    return (
        <>
            <h1>I've rendered {count} times!</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}

export default UseEffectHooks