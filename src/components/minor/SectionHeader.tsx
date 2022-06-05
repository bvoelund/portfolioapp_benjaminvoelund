import React from "react";

type SectionHeaderProps = {
  title: string;
  description: string | React.ReactNode;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-5xl italic pb-8 tracking-wide">{title}</h2>
      {description}
    </>
  );
};

export default SectionHeader;
