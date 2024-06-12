import { ModalProvider } from "./components/Modal/Modal.context";
import ModalControls from "./components/Modal/ModalControls";

function App() {
  return (
    <ModalProvider>
      <ModalControls />
    </ModalProvider>
  );
}

export default App;
