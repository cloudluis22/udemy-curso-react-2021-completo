import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealRef = () => {

    const [show, setShow] = useState(false);

    const handleComponentStatus = () => { setShow( !show ) };

    return (
        <div>
            <h1>Real Example Use of useRef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button className="btn btn-primary mt-5" onClick={handleComponentStatus}> Show/Hide </button>
        </div>
    )
}
