import React, {useState, useEffect,useRef} from 'react';


function MyComponent(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    

    useEffect(() => {
      console.log("Component Rendered");
    },);

    function handleRef1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "pink";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        
    }
    function handleRef2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "pink";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        
    }
    function handleRef3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "pink";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        
    }
    
   
    return(
        <div>
            <button onClick={handleRef1}>Click Me 1</button>
            <input  ref={inputRef1} />
            <br />
            <button onClick={handleRef2}>Click Me 2</button>
            <input  ref={inputRef2} />
            <br />
            <button onClick={handleRef3}>Click Me 3</button>
            <input  ref={inputRef3} />
        </div>
    )
}

export default MyComponent;