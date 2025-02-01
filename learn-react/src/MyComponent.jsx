import {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const updateName = ()=>{setName("BOB");}

    const [age, setAge] = useState(0);
    const incrementAge = ()=>{setAge(age + 1);}

    const [isEmployed, setEmployeStatus] = useState(false);
    const toggleEmployeStatus = () => {setEmployeStatus(!isEmployed);}

    return (
        <div>
            <p>{name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>{age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>{isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeStatus}>Toggle </button>
        </div>
    )
}

export default MyComponent;