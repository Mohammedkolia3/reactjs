import React, { useState } from "react";
import './Inc.css'
function Increment() {

    const [counter, setCounter] = useState(0);
    console.log(useState());
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    return (<>
        <div className="inc">
            <h1>{counter}</h1>
            <button onClick={increment} className="btn1">Increment</button>
            <button onClick={decrement} className="btn2">Decrement</button>
        </div>
    </>);
}
export default Increment;