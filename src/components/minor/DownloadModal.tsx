import classNames from "classnames";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import dkFlag from "../../assets/images/personal/denmark.png";
import ukFlag from "../../assets/images/personal/english.svg";
import CV_BenjaminVoelund_Dansk from "../../assets/documents/cv/CV_BenjaminVoelund_Dansk.pdf";
import ModalContainer from "../containers/ModalContainer";

type TestModalType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

export default function TestModal({ showModal, setShowModal }: TestModalType) {
  return (
    <ModalContainer
      title="Download my resume"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      {/*body*/}
      <div className="relative flex-auto">
        <div className="flex justify-between border-b p-6">
          <div className="flex justify-center items-center">
            <img src={dkFlag} className="h-6 w-6"></img>
            <p className="pl-5 font-semibold dark:text-white text-black">
              Danish resume
            </p>
          </div>
          <a
            href={CV_BenjaminVoelund_Dansk}
            download
            onClick={() => setShowModal(false)}
          >
            <BiDownload size={35} className="cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-between p-6">
          <div className="flex justify-center items-center">
            <img src={ukFlag} className="h-6 w-6"></img>
            <p className="pl-5 font-semibold dark:text-white text-black">
              English resume
            </p>
          </div>
          <a
            href={CV_BenjaminVoelund_Dansk}
            download
            onClick={() => setShowModal(false)}
          >
            <BiDownload size={35} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </ModalContainer>
  );
}
