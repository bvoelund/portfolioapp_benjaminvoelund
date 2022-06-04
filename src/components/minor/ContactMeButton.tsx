import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactMeButton = () => {
  return (
    <div
      onClick={() => window.open("mailto:bvoelund@hotmail.com")}
      className="w-14 h-14 shadow-xl cursor-pointer rounded-xl bg-gradient-to-r p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] hover:scale-125  transition-all duration-300 ease-in-out mx-2"
    >
      <div className="flex justify-between items-center dark:bg-[#0d1321] bg-white rounded-lg p-2 h-full w-full">
        <AiOutlineMail className="dark:text-white text-[#0d1321] transition-all duration-300 delay-300 ease-in-out h-10 w-10" />
      </div>
    </div>
    // <button
    //   className="border-2 border-orange-300 p-4 shadow-md shadow-orange-300 rounded-2xl hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out opacity-100"
    //   onClick={() => window.open("mailto:bvoelund@hotmail.com")}
    // >
    //   <div className="flex justify-center items-center ">
    //     <p className="hidden md:block text-lg font-semibold dark:font-normal whitespace-nowrap overflow-hidden">
    //       Contact me
    //     </p>
    //     <div className="md:pl-2 ">
    //       <AiOutlineMessage className="dark:text-white sm:w-6 sm:h-6 w-5 h-5" />
    //     </div>
    //   </div>
    // </button>
  );
};

export default ContactMeButton;
