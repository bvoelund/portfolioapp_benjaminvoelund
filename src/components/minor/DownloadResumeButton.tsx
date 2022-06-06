import { BiDownload } from "react-icons/bi";

import denmark from "../../assets/images/personal/denmark.png";

type DownloadResumeButtonProps = {
  flag: string;
  downloadFile: string;
  setShowResumeModal: (toggle: boolean) => void;
  showResumeModal: boolean;
};

const DownloadResumeButton = ({
  flag,
  downloadFile,
  setShowResumeModal,
  showResumeModal,
}: DownloadResumeButtonProps) => {
  return (
    <div
      onClick={() => setShowResumeModal(!showResumeModal)}
      className="outline-none w-14 h-14 shadow-xl cursor-pointer rounded-xl bg-gradient-to-r p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] hover:scale-125 transition duration-300 ease-in-out mx-2"
    >
      <div className="flex justify-between items-center dark:bg-[#0d1321] bg-white rounded-lg p-2 h-full w-full">
        <BiDownload className="dark:text-white text-[#0d1321] transition duration-300 delay-300 ease-in-out h-10 w-10" />
        {/* <img src={flag} className="h-6 w-6"></img> */}
      </div>
    </div>
    //   <a
    //   href={downloadFile}
    //   download
    //   className="w-fit md:h-14 h-12 shadow-xl cursor-pointer rounded-xl bg-gradient-to-r p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] hover:scale-125 transition duration-300 ease-in-out mx-2"
    // >
    //   <div className="flex justify-between items-center dark:bg-[#0d1321] bg-white rounded-lg p-2 h-full w-full">
    //     <BiDownload className="dark:text-white text-[#0d1321] transition duration-300 delay-300 ease-in-out h-8 w-8 mr-1" />
    //     {/* <img src={flag} className="h-6 w-6"></img> */}
    //   </div>
    // </a>
  );
};

export default DownloadResumeButton;
