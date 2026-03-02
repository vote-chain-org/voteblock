import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState();
  const handleSelectColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <div classname="colorpicker-container">
      <h1>Select Color</h1>
      <div classname="color-display" style={{ background: color }}>
        <p>Selected color: {color}</p>
      </div>
      <input type="color" value={color} onChange={handleSelectColor} />
    </div>
  );
}
export default Color;
