import axios from "axios";
import { useState } from "react";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleClickButton = async () => {
    try {
      const response = await axios.post(ENDPOINT, {
        value,
      });
      setTodos((prev) => [...prev, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClickButton}>추가</button>
    </>
  );
};

export default Todo;
