import "./App.css";
import "./custom.css";
import { useModal } from "./hooks/useModal";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "test", content: "test" });
  };

  return <button onClick={handleClickButton}>모달띄우기</button>;
}

export default App;
