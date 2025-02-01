import React, {useState} from 'react';

function Counter(){

    const[count, setCount] = useState(0);
    const incrementCounter = ()=>{
        setCount((c) => c+1);
        setCount((c) => c+1);
    }


    return(
        <><h1>Value: &nbsp; {count}</h1>
        <button onClick={incrementCounter}>Increment</button></>
    )
}

export default Counter;