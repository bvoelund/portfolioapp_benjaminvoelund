import { MdOpenInNew } from "react-icons/md";
import ModalContainer2 from "../containers/ModalContainer2";

type WorkModalType = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  title: string;
  text: React.ReactNode;
  images: string[];
  usedTechnologies: React.ReactNode;
  externalLink: string;
};

export default function WorkModal({
  showModal,
  setShowModal,
  title,
  text,
  images,
  usedTechnologies,
  externalLink,
}: WorkModalType) {
  return (
    <ModalContainer2
      title={title}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="flex justify-center">
        <div className="md:w-5/6">
          {externalLink.length > 0 && (
            <a
              target="_blank"
              href={externalLink}
              className=" underline inline-block decoration-orange-400 dark:decoration-[#43cea2] outline-none"
            >
              <div className="flex items-center text-orange-400 dark:text-[#43cea2]">
                <p className="pr-2">Github Link</p>
                <MdOpenInNew />
              </div>
            </a>
          )}

          <img src={images[0]} className="pt-4 md:min-h-[400px]" />

          <div className="my-2 flex-grow">{text}</div>
          <h3 className="text-xl py-2">Technologies used:</h3>
          <div className="flex flex-col md:flex-row justify-start md:space-x-4 pb-2">
            {usedTechnologies}
          </div>
          {images[1] && <img src={images[1]} className="pb-4" />}
          {images[2] && <img src={images[2]} />}
        </div>
      </div>
    </ModalContainer2>
  );
}
