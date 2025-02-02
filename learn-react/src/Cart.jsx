import React, {useState} from 'react';

function Cart(){

    const[cart, setCart] = useState(["Apple", "Banana", "Mango"]);

    function addItem(){
        const item = document.getElementById("input").value;
        item !==""?setCart(c=>[...c, item]):setCart(c=> c);
        document.getElementById("input").value="";
    }

    function deleteItem(index){
        setCart(c=>c.filter((_,i)=>i!==index))
    }

    
    


    return(
        <>
        <h1>My Cart</h1>
        <ul>
            {cart.map((itm, index)=>
            <li key={index} onClick={()=> deleteItem(index)} >{itm} </li>
            )}
        </ul>
        <input type="text" id="input" />
        <button onClick={addItem}>Add Item</button>
        </>
    )
}

export default Cart;