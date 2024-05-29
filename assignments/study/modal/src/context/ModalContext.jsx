import { createContext, useState } from "react";
import Modal from "../components/Modal";

const initValue = {
  open: () => {},
  close: () => {},
};
export const ModalContext = createContext(initValue);

// useModal의 api를 설계하는 것이나 마찬가지
const ModalProvider = ({ children }) => {
  const [modalOptions, setModalOptions] = useState(null);
  const value = {
    open: (options) => {
      setModalOptions(options);
    },
    close: () => setModalOptions(null),
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && <Modal {...modalOptions} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
