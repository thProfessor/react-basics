import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  // const [name, setName] = useState("Shreyus");

  // const changeName = () => {
  //   let newName = name === "Shreyus" ? "Vishnu" : "Shreyus";
  //   setName(newName);
  // };

  const [sub, setSub] = useState("comp");
  const changeSub = () => {
    setSub((prev) => "arts");
  };
  return (
    <>
      {/* <div className="App">Hello {name}</div>
      <button onClick={changeName}>Change name</button> */}
      <Counter subject={sub} change={changeSub} />
    </>
  );
};

export default App;
