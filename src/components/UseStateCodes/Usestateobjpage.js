import React, { useState } from 'react';

function Usestatepage() {
    let [state, setState] = useState({firstName: '', lastName: ''})
    return (
        <div>
         <input type="text" value={state.firstName} onChange={(e) => setState({... state, firstName: e.target.value})} />
         <input type="text" value={state.lastName} onChange={(e) => setState({...state, lastName: e.target.value})} />
         <label>{state.firstName}    {state.lastName}</label>
        </div>
    )
}

export default Usestatepage
