import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalContainerType = {
  showModal: boolean;
  setShowModal: (toggle: boolean) => void;
  title: string;
  children: React.ReactNode;
};

const ModalContainer = ({
  showModal,
  setShowModal,
  title,
  children,
}: ModalContainerType) => {
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-10 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        static
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <div className="min-h-fit h-fit px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <div className=" text-black dark:text-white inline-flex flex-col h-full w-5/6 xl:w-4/6 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-[#111827] shadow-xl rounded-2xl">
              <Dialog.Title
                as="h1"
                className="text-xl md:text-3xl font-medium leading-6 border-b pb-4"
              >
                {title}
                <div
                  className="float-right cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <AiOutlineCloseCircle size={30} />
                </div>
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalContainer;
