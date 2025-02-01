

function Button() {
    const clickHandle = (name)=>{
        console.log(`${name} pls stop clicking`)};
    const handleClick = (e) => {console.log(e)
        e.target.textContent = "WOW Man"
    };    
    return(
        <>
        <button onClick={ () =>clickHandle("John")}> Click Me</button>
        <button onClick = {(e)=>{handleClick(e)}}>Click Me for event</button>
        </>

    )
    
}

export default Button;