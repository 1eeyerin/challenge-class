import { useEffect, useState } from "react";
import "./App.css";

const SIZE = 40;
const MAX_BLOCK = 9;

const App = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const [{ translateY, scaleX }, setTransform] = useState({
    translateY: "0px",
    scaleX: 1,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
          setPosition((prev) =>
            prev.y <= 0 ? prev : { ...prev, y: prev.y - SIZE }
          );
          break;
        case "ArrowDown":
          setPosition((prev) =>
            prev.y >= SIZE * MAX_BLOCK ? prev : { ...prev, y: prev.y + SIZE }
          );
          break;
        case "ArrowLeft":
          setPosition((prev) =>
            prev.x <= 0 ? prev : { ...prev, x: prev.x - SIZE }
          );
          setTransform((prev) => ({ ...prev, scaleX: -1 }));
          break;
        case "ArrowRight":
          setPosition((prev) =>
            prev.x >= SIZE * MAX_BLOCK ? prev : { ...prev, x: prev.x + SIZE }
          );
          setTransform((prev) => ({ ...prev, scaleX: 1 }));
          break;
        case "Space":
          setTransform((prev) => ({ ...prev, translateY: "-30px" }));

          setTimeout(() => {
            setTransform((prev) => ({ ...prev, translateY: "0px" }));
          }, 150);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default App;
