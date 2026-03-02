import React, { useState } from "react";
function Component() {
  const [name, setName] = useState("");
  const [quant, setQuant] = useState();
  const [payment, setPayment] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const setQuantValue = (event) => {
    setQuant(event.target.value);
  };

  const handleChangePayement = (event) => {
    setPayment(event.target.value);
  };

  const [shipping, setShipping] = useState();

  const handleShipping = (event) => {
    setShipping(event.target.value);
  };
  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <input value={quant} onChange={setQuantValue} type="number"></input>
      <p>Number: {quant}</p>

      <select value={payment} onChange={handleChangePayement}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Matercard">Mastercard</option>
        <option value="Chase">Chase</option>
        <option value="Axis">Axis</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="PickUp"
          checked={shipping === "PickUp"}
          onChange={handleShipping}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Ship"
          checked={shipping === shipping}
          onChange={handleShipping}
        />
        Shipping
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default Component;
