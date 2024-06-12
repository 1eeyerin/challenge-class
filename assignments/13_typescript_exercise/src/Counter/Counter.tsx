import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [count, setCount] = useState(5);
  const [unit, setUnit] = useState(1);

  const handleChangeUnit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(Number(event.target.value));
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <CounterDisplay value={count} />
      <input
        type="number"
        value={unit}
        onChange={handleChangeUnit}
        placeholder="이곳에 숫자를 넣어주세요"
      />
      <div className="flex">
        <CounterButton onClick={increment}>[+]</CounterButton>
        <CounterButton onClick={decrement}>[-]</CounterButton>
      </div>
    </div>
  );
};

export default Counter;
