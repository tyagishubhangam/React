import React, {useState} from 'react';

function Car(){

    const[car, setCar] = useState({year:2020,
                                   make:"Ford",
                                   model:"Mustang" 
    });

    function changeYear(event) {
        setCar(c=>({...c, year: event.target.value}))
        
    }
    function changeMake(event) {
        setCar(c=>({...c, make: event.target.value}))
        
    }
    function changeModel(event) {
        setCar(c=>({...c, model: event.target.value}))
        
    }
    


    return(
        <><h1>My Favourite Car: &nbsp; {car.year} {car.make} {car.model}</h1>
        Year:
       <input type="number" value={car.year} onChange={changeYear} /> <br />
       Make: <input type="text" value={car.make} onChange={changeMake} /> <br />
       Model: <input type="text" value={car.model} onChange={changeModel} />
        </>
    )
}

export default Car;