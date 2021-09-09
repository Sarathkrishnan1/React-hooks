import React, {useState} from 'react'

function Usestatepagetwo() {
    let [counter, setcounter] = useState(0);
    const increment = () => {
        setcounter((prevState) => prevState + 1);
    } 
    const decrement = () => {
        setcounter((prevState) => prevState - 1);
    }
    const reset = () => {
        setcounter(0);
    }
    return (
        <div>
            <b>Increment and decrement with Use State</b><br />
            Counter{counter}<br />
            <button onClick={reset} >reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Usestatepagetwo
