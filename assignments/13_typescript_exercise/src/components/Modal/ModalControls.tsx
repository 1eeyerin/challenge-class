import Modal from "./Modal";
import { useModal } from "./Modal.context";

const ModalControls = () => {
  const modal = useModal();

  const handleOpen = () => {
    modal.open(<Modal>ddd</Modal>);
  };

  return (
    <>
      <button onClick={handleOpen}>모달띄우기</button>
    </>
  );
};

export default ModalControls;
