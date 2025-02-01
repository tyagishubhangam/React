import React, {useState} from 'react';

function MyComponent() {
    
    const [input, setInput] = useState("Guest");
    const changeInput = (event)=>{
            setInput(event.target.value);
    };

    const [textArea, setTextArea] = useState("");
    const changeText = (event) =>{
        setTextArea(event.target.value);
    };

    const [payment, setPayment] = useState("");
    const changePaymentMethod=(event)=>{
        setPayment(event.target.value);
    };

    const [shipping, setShipping] = useState();
    const updateShipping = (event)=>{
        setShipping(event.target.value);
    };



    return(
        <div>
            <input type="text" value={input} onChange={(event)=>changeInput(event)}/>
            <p>Input:&nbsp; {input}</p>
            <textarea placeholder="Enter text" value={textArea} onChange={(event)=> changeText(event)}></textarea>
            <p>TEXTAREA: &nbsp; {textArea}</p>

            <select value={payment} onChange={changePaymentMethod}>
                <option value="">Select An Option</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
            </select>
            <p>PaymentMethod:&nbsp; {payment}</p>

            <label >
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={updateShipping} />
                Delivery
            </label>
            <label>
                <input type="radio" value="Pick-Up" checked={shipping === "Pick-Up"} onChange={updateShipping} />
                Pick-Up
            </label>
            <p>Shipping Mode: &nbsp; {shipping}</p>


        </div>
    )
    
}

export default MyComponent;