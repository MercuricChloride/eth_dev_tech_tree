import React, { useCallback, useEffect, useRef } from "react";
import { DataNode } from "../Data";

// TODO : use responsive units instead of hardcoding px

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
      <div className="w-[700px] h-[200px] shadow-lg bg-[#1A202C]  flex relative z-10 rounded-lg p-2 text-white space-x-4">
        <div className="h-[192px] w-[180px] border-2 border-teal-700 rounded-lg">
          <img className="rounded-lg bg-white h-full max-h-[192px] w-full" src={modalData.image} alt="challenge" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-start items-start leading-5 text-white  space-y-4 mt-4">
            <h1 className="text-lg">{modalData.label}</h1>
            <p>{modalData.description}</p>
          </div>
          <a href={modalData.link} target="_blank" rel="noreferrer" className="block mb-2">
            <button className=" bg-teal-600 text-white rounded-md hover:bg-teal-700 w-full h-full mb-4">
              Take the Challenge
            </button>
          </a>
        </div>
        <div
          className="cursor-pointer absolute top-2 right-2 w-[32px] h-[32px] text-2xl p-0 z-10"
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
