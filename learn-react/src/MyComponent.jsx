import React, {useState, useEffect} from 'react';


function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);

      }
    }, [])

    useEffect(()=>{
        document.title=`Dimensions:${width} X ${height}`
    })
    

    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        
    }

   
    return(
        <>
        <h1>My Window Dimensions</h1>
        <br />
        <h2>Width:{width}</h2>
        <h2>Height:{height}</h2>
        </>
    )
}

export default MyComponent;