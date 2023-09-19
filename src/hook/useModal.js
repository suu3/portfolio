import { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const modalRef = useOutsideClick(() => {
    hideModal();
  });

  return { isOpen, modalRef, hideModal, showModal };
};

export default useModal;
