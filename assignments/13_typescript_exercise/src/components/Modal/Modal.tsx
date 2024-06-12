import { useModal } from "./Modal.context";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const modal = useModal();

  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <button className={styles.close} onClick={() => modal.close()}>
        Close
      </button>
    </div>
  );
};

const styles = {
  container: [
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "right-0",
    "bg-black/50",
  ].join(" "),
  content: [
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "bg-white",
    "p-4",
    "rounded-md",
    "shadow-md",
  ].join(" "),
  close: ["absolute", "top-0", "right-0", "p-2", "cursor-pointer"].join(" "),
};

export default Modal;
