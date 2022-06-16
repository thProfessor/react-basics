import { useState } from "react";

const Counter = ({ subject, change }) => {
  const [menu, setMenu] = useState([
    {
      name: "food item1",
      rating: 1,
    },
    {
      name: "food item2",
      rating: 2,
    },
    {
      name: "food item3",
      rating: 2,
    },
  ]);

  //   const changeName = (newName) => {
  //     setCount((prev) => {
  //       return {
  //         ...prev,
  //         subject: newName,
  //       };
  //     });
  //   };

  return (
    <>
      <h1>List of food items </h1>
      {menu.map((food, index) => {
        return (
          <li key={index}>
            {food.name} and {food.rating}
          </li>
        );
      })}
      {/* <h1>
        value is {count.subject} {subject}
      </h1>
      <button onClick={() => changeName(subject)}>change name</button>
      <button onClick={change}>chnage subject</button> */}
    </>
  );
};

export default Counter;
