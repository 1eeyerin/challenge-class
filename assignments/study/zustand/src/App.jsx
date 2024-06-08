import "./App.css";
import useCounterStore from "./zustand/counterStore";

function App() {
  const { count, plus, minus } = useCounterStore((count) => count);

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={plus}>
        증가
      </button>
      <button type="button" onClick={minus}>
        감소
      </button>
    </>
  );
}

export default App;
