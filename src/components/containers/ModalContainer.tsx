import React from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalContainerType = {
  children: React.ReactNode;
};

const ModalContainer = ({ children }: ModalContainerType) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative my-6 mx-auto max-w-3xl flex justify-center w-5/6 mt-32">
          {children}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalContainer;
