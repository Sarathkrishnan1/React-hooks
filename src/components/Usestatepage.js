import React, { useState } from 'react';

function Usestatepage() {
    let [counter, setcounter] = useState(0)

    const btnClk = () => {
        setcounter(counter + 1);
    }
    return (
        <div>
            <b>State in Hooks</b><br /><br />
            <button onClick={btnClk}>Counter</button>
            Counter Value {counter}
        </div>
    )
}

export default Usestatepage
