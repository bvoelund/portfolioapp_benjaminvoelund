import { MdOpenInNew } from "react-icons/md";
import ModalContainer from "../../containers/ModalContainer";
import ModalContainer2 from "../../containers/ModalContainer";
import { WorkModalDataType } from "../../sections/MyWork";

type WorkModalType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  modalData: WorkModalDataType;
};

export default function WorkModal({
  showModal,
  setShowModal,
  modalData,
}: WorkModalType) {
  return (
    <ModalContainer
      title={modalData?.modalTitle}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="flex justify-center">
        <div className="md:w-5/6">
          {modalData?.externalLink && modalData?.externalLink?.length > 0 && (
            <a
              target="_blank"
              href={modalData.externalLink}
              className=" underline inline-block decoration-orange-400 dark:decoration-[#43cea2] outline-none"
            >
              <div className="flex items-center text-orange-400 dark:text-[#43cea2]">
                <p className="pr-2">Github Link</p>
                <MdOpenInNew />
              </div>
            </a>
          )}

          <img
            src={modalData?.modalImages[0]}
            className="pt-4 md:min-h-[400px]"
          />

          <div className="my-2 flex-grow">{modalData?.modalText}</div>
          <h3 className="text-xl py-2">Technologies used:</h3>
          <div className="flex flex-col md:flex-row justify-start md:space-x-4 pb-2">
            {modalData?.usedTechnologies}
          </div>
          {modalData?.modalImages[1] && (
            <img src={modalData.modalImages[1]} className="pb-4" />
          )}
          {modalData?.modalImages[2] && <img src={modalData.modalImages[2]} />}
        </div>
      </div>
    </ModalContainer>
  );
}
