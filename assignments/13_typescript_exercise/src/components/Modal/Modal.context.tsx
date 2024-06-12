import { createContext, useContext, useState } from "react";

interface ModalContextValue {
  open: (element: React.ReactElement) => void;
  close: () => void;
}

const initValue: ModalContextValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<ModalContextValue>(initValue);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };

  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
};
