import React, { useState } from "react";
function Car(props) {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    name: "Mustang",
  });

  const handleCar = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleMake = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleName = (event) => {
    setCar((c) => ({ ...c, name: event.target.value }));
  };
  return (
    <div>
      <p>
        Your Favourite Car: {car.year} {car.make} {car.name}
      </p>
      <input type="number" value={car.year} onChange={handleCar} />
      <br />
      <input type="text" value={car.make} onChange={handleMake} />
      <br />
      <input type="text" value={car.name} onChange={handleName} />
      <br />
      <p>NAME: {props.name}</p>
    </div>
  );
}
export default Car;
