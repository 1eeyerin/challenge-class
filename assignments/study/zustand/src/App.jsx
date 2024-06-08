import "./App.css";
import useCounterStore from "./zustand/counterStore";

function App() {
  const { count, increase, decrease, doubleCount } = useCounterStore(
    (count) => count
  );

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={increase}>
        증가
      </button>
      <button type="button" onClick={doubleCount}>
        get을 이용하여 현재 값에 2배 증가
      </button>
      <button type="button" onClick={decrease}>
        감소
      </button>
    </>
  );
}

export default App;
