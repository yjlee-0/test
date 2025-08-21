import React, { createContext, useContext, useState } from 'react';

type ModalContextType = {
  isShow: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: any) => {
  const [isShow, setIsShow] = useState(false);
  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);

  return (
    <ModalContext.Provider value={{ isShow, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}

export default ModalProvider