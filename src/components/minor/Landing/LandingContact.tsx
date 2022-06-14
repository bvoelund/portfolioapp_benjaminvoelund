import React from "react";
import ContactMeButton from "../ContactMeButton";
import DownloadResumeButton from "../DownloadResumeButton";
import SocialMedias from "../SocialMedias";

type LandingContactProps = {
  setShowModal: (toggle: boolean) => void;
  showModal: boolean;
};

const LandingContact = ({ setShowModal, showModal }: LandingContactProps) => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="block justify-center items-center py-2 pt-24 lg:pt-0">
        <SocialMedias />
        <div className="flex justify-center mb-4 md:text-base text-sm ">
          <div className="hidden lg:block w-full text-center">
            <p className="font-semibold">
              Contact me or check out my profiles!
            </p>
          </div>
        </div>
        <div className="lg:flex block justify-center items-center">
          <div className="flex justify-center items-center mb-4">
            <ContactMeButton />
          </div>
          <div className="flex justify-center items-center mb-4">
            <DownloadResumeButton
              setShowResumeModal={setShowModal}
              showResumeModal={showModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
