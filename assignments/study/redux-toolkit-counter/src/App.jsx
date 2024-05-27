import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement(5));
  };

  const handleIncrement = () => {
    dispatch(increment(5));
  };

  return (
    <div>
      <Display />
      <Button label="빼기 5" handleClick={handleDecrement} />
      <Button label="더하기 5" handleClick={handleIncrement} />
    </div>
  );
}

export default App;
