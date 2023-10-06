import { useEffect, useState } from "react";
import AddForm from "./Components/Addlikes";
import MyList from "./Components/Likes";
import "./App.css";
const App = () => {
  const [value, setValue] = useState([
    {
      id: 1,
      value: "A",
    },
    {
      id: 2,
      value: "B",
    },
  ]);

  function handleAdd(newVal) {
    const obj = {
      id: new Date().getTime(),
      value: newVal,
    };
    console.log("In app component ", obj);
    console.log("Current values ", value);
    const temp = [...value];
    temp.push(obj);
    setValue(temp);
  }

  return (
    <>
      <h1>Like App</h1>
      <AddForm handleAdd={handleAdd} />
      <MyList listItem={value} />
    </>
  );
};
export default App;
