

function Food() {

    const foods = ["Apple", "Banana","Grapes", "Mango","Cheery", "Oranges"];
    
    return(
    <ul>
        {foods.map((food)=>(<li>{food}</li>))}
    </ul>
    );

    
}

export default Food;