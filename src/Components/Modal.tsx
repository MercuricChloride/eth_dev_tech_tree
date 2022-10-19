import React, { useCallback, useEffect, useRef } from "react";
import { DataNode } from "../Data";

interface Props {
  modalData: DataNode;
  hideModal: Function;
  isModalOpen: Boolean;
}

const Modal = ({ modalData, hideModal, isModalOpen }: Props) => {
  const modalRef = useRef(null);

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      hideModal();
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        hideModal();
        console.log("Esc pressed");
      }
    },
    [hideModal, isModalOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed flex items-center justify-center top-0 left-0 z-[10000]"
      onClick={closeModal}
      ref={modalRef}
    >
      <div className="w-[800px] h-[500px] shadow-lg bg-white text-black grid grid-cols-2 relative z-10 rounded-lg">
        <img className="w-full h-full rounded-lg bg-white" src={modalData.image} alt="challenge" />
        <div className="flex flex-col justify-center items-center leading-5 text-[#141414] px-4 space-y-4">
          <h1 className="text-lg">{modalData.label}</h1>
          <p>{modalData.description}</p>
        </div>
        <div
          className="cursor-pointer absolute top-5 right-5 w-[32px] h-[32px] text-2xl p-0 z-10"
          aria-label="Close modal"
          onClick={() => hideModal()}
        >
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default Modal;
