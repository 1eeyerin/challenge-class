import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Display />
      <Button />
    </main>
  );
}

export default App;
