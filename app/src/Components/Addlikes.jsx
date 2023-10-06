import { useState } from "react";
const AddForm = (props) => {
  // console.log("add form props", props);

  const { handleAdd } = props;

  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleAdd(data);
    setData("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="items">What do you like? </label>
      <input type="text" id="items" onChange={handleChange} value={data} />
      <button>Add</button>
    </form>
  );
};
export default AddForm;
