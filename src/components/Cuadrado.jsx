import React, { useState, useRef} from "react";
import "../styles/Cuadrado.css";

function Cuadrado() {
  const initialColor = {
    background: "rgb(210, 14, 12)",
  };

  const [color, setColor] = useState(initialColor);

  const intervalRef = useRef(null);

  function changeColor() {
    intervalRef.current = setInterval(() => {
      let randomNumber1 = Math.floor(Math.random() * 256);
      let randomNumber2 = Math.floor(Math.random() * 256);
      let randomNumber3 = Math.floor(Math.random() * 256);

      let newColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;

      setColor({ background: newColor });
    }, 1000);
  }

  function stopColor() {
    clearInterval(intervalRef.current);
  }

  function stopColorComplete(){
    clearInterval(intervalRef.current);
    setColor(initialColor)
  }

  return (
    <>
      <div
        className={`container`}
        style={color}
        onMouseEnter={changeColor}
        onMouseLeave={stopColorComplete}
        onDoubleClick={stopColor}
      ></div>
    </>
  );
}

export default Cuadrado;
