import React, {useState} from 'react';

function ColorApp() {

  const [color, setColor] = useState("#FFFFFF");
  const changeColor = (event)=> {
    setColor(event.target.value);
  }
    return(
      <>
      <div className="container">
      <h1>Color Picker App</h1>
        <div className="colorBox" style={{backgroundColor:color}}>
          
          <p className="color-text" >Color:{color}</p>
        </div>
        <input type="color" value={color} onChange={changeColor} />
      </div>
      </>
    );
};
export default ColorApp;