import React from "react";
import { FaReact } from "react-icons/fa";

type TechnologyPillType = {
  icon: React.ReactNode;
  header: string | React.ReactNode;
};

const TechnologyPill = ({ icon, header }: TechnologyPillType) => {
  return (
    <div className="col-span-1 row-span-1 h-full w-full">
      <div className="shadow-orange-300 dark:shadow-sky-800 hover:shadow-none dark:hover:shadow-none dark:shadow-lg shadow-xl hover:scale-[105%] transition duration-300 ease-in-out rounded-3xl bg-gradient-to-t p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b]">
        <div className="rounded-3xl flex justify-between items-center dark:bg-[#0d1321] bg-white h-full w-full p-3">
          <p className="font-bold text-sm sm:text-lg">{header}</p>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPill;
