import { ModalProvider } from "./components/Modal/Modal.context";
import ModalControls from "./components/Modal/ModalControls";
import Posts from "./components/Modal/Posts/Posts";

function App() {
  return (
    <>
      <ModalProvider>
        <ModalControls />
      </ModalProvider>
      <Posts />
    </>
  );
}

export default App;
