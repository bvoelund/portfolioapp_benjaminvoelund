import classNames from "classnames";
import React, { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import dkFlag from "../../assets/images/personal/denmark.png";
import ukFlag from "../../assets/images/personal/english.svg";
import CV_BenjaminVoelund_Dansk from "../../assets/documents/cv/CV_BenjaminVoelund_Dansk.pdf";
import ModalContainer from "../containers/ModalContainer";
import { Dialog, Transition } from "@headlessui/react";
import ModalContainer2 from "../containers/ModalContainer2";

type WorkModalType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  title: string;
  text: string;
  images: string[];
};

export default function WorkModal({
  showModal,
  setShowModal,
  title,
  text,
  images,
}: WorkModalType) {
  return (
    <ModalContainer2
      title={title}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="flex justify-center">
        <div className="w-5/6">
          <img src={images[0]} className="pt-4" />
          <div className="my-2 flex-grow">
            <p className="text-lg py-4">{text}</p>
          </div>
          {images[1] && <img src={images[1]} className="pb-4" />}
          {images[2] && <img src={images[2]} />}
        </div>
      </div>
    </ModalContainer2>
  );
}
