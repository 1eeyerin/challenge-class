import { useEffect, useState } from "react";
import "./App.css";

const MOVE_SIZE = 40;
const MAX_BLOCK = 9;
const LIMIT_POS = MOVE_SIZE * MAX_BLOCK;

const App = () => {
  const [{ translateY, scaleX, x, y }, setPosition] = useState({
    x: 0,
    y: 0,
    translateY: "0px",
    scaleX: 1,
  });

  useEffect(() => {
    const keyDownHandler = handleKeyDown(setPosition);
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="playground">
      <img
        src="/src/assets/pikachu.png"
        alt=""
        className="pika"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translateY(${translateY}) scaleX(${scaleX})`,
        }}
      />
    </div>
  );
};

const updatePosition = (axis, delta, limit) => (prev) => {
  const newValue = prev[axis] + delta;
  return newValue < 0 || newValue > limit
    ? prev
    : { ...prev, [axis]: newValue };
};

const handleKeyDown = (setPosition) => (event) => {
  switch (event.code) {
    case "ArrowUp":
      setPosition(updatePosition("y", -MOVE_SIZE, LIMIT_POS));
      break;
    case "ArrowDown":
      setPosition(updatePosition("y", MOVE_SIZE, LIMIT_POS));
      break;
    case "ArrowLeft":
      setPosition((prev) => ({
        ...updatePosition("x", -MOVE_SIZE, LIMIT_POS)(prev),
        scaleX: -1,
      }));
      break;
    case "ArrowRight":
      setPosition((prev) => ({
        ...updatePosition("x", MOVE_SIZE, LIMIT_POS)(prev),
        scaleX: 1,
      }));
      break;
    case "Space":
      setPosition((prev) => ({ ...prev, translateY: "-30px" }));

      setTimeout(() => {
        setPosition((prev) => ({ ...prev, translateY: "0px" }));
      }, 150);
      break;

    default:
      break;
  }
};

export default App;
