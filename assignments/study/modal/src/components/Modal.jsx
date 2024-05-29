import { useModal } from "../hooks/useModal";
import Backdrop from "./Backdrop";

const Modal = ({ title = "", description = "", content = "" }) => {
  const modal = useModal();

  const handleClose = () => {
    modal.close();
  };

  return (
    <Backdrop>
      <article className="modal">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{content}</div>
        <button onClick={handleClose}>닫기</button>
      </article>
    </Backdrop>
  );
};

export default Modal;
