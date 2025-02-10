import React, {useState, useEffect} from 'react';


function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");


    // //The below code will change the title on every render  since inside the useEffect hook we are passing only a function
    // useEffect(()=> {document.title = `count ${count}`}); 


    //Since in below code we are passing an empty array of dependencies which means that this will only execute only at once i.e at mount
//    useEffect(()=>{document.title = ` Counter::${count}`},[]);

    useEffect(()=>
        {
            document.title = `Counter ${count} ${color}`
        }, [count, color]
    )  // here the useEffect hook will only execute when the values in dependencies array will change

    function incrementCount() {
        setCount((c) => c + 1 );
        
    }

    function decrementCount() {
        setCount((c)=> c-1);
    }

    function changeColor(){
        if(color ==="green"){
            setColor((c)=> "red");
        }else{
            setColor((c)=> "green");
        }
        
    }

    return(
        <>
        <h1 style={{color: color}}>Counter: {count}</h1>
        <button onClick = {incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent;