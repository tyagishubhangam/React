import React, {useState} from 'react';

function Garage(){

    const [garage, setGarage] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function addCar(){
        const car = {
            "year":year,
            "make":make,
            "model":model
        }
        setGarage((g) => [...g,car]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");



    }

    function handleYear(event){
        setYear(y => y=event.target.value)
    }

    function handleMake(event) {
        setMake(m=> m=event.target.value)
    }

    function handleModel(event) {
        setModel(m=> m=event.target.value)
    }

    function deleteCar(index){
        setGarage((g) => g.filter((_,i)=> i!==index));
    }

    return(
        <>
        <h1>MY Garage</h1>

        <ul>
        {garage.map(
            (car,index)=>
                <li key={index} onClick={()=>deleteCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
        )}
        </ul>

        <input type="number" value={year} onChange={handleYear} /> <br />
        <input type="text" value={make} onChange={handleMake} placeholder="Enter make"/><br />
        <input type="text" value={model} onChange={handleModel} placeholder="Enter model" /> <br />
        <button onClick={addCar}>Add Car</button>
        </>
    )

}

export default Garage;