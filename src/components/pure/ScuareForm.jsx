import React, { useState } from 'react'
const ScuareForm = () => {
  const [color, setColor] = useState("#000");

  const StyleDiv={
    width: "255px",
    height: "255px",
    backgroundColor: color 
  }

  const changeColor = Math.floor(Math.random() * 255)
  
  const OverMouseDiv = () => {
    const randomColor = `rgb(0, ${changeColor}, ${changeColor})`;
    setColor(randomColor);
  };

  const MouseChange = () => {
    setColor("#000");
  };

  return (
    <div style={StyleDiv}
      onMouseEnter={OverMouseDiv}
      onMouseLeave={MouseChange}
      onDoubleClick={MouseChange}
    />
  );
};
export default ScuareForm;