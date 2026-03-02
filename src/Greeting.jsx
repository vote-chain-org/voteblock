import React from "react";
function Greetings() {
  const fruits = [
    { id: 1, name: "apples", calory: 46 },
    { id: 2, name: "oranges", calory: 56 },
    { id: 3, name: "mangos", calory: 32 },
    { id: 4, name: "pineapples", calory: 95 },
    { id: 5, name: "grapes", calory: 72 },
    { id: 6, name: "bananas", calory: 88 },
  ];
  fruits.sort((a, b) => b.name.localeCompare(a.name));
  const listItems = fruits.map((fruits) => (
    <li key={fruits.id}>
      {fruits.name}: &nbsp;
      <b>{fruits.calory}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}
export default Greetings;
