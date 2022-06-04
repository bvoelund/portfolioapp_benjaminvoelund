import { Link } from "react-scroll";

type NavBarIconProps = {
  icon: JSX.Element | JSX.Element[];
  text: string;
  sectionRef: string;
};

const NavBarIcon = ({ icon, text, sectionRef }: NavBarIconProps) => (
  <Link to={sectionRef} smooth offset={-110}>
    <div className="flex flex-col justify-center items-center py-4 mx-4 dark:hover:text-[#43cea2] hover:text-orange-400 cursor-pointer">
      {icon}
      <p className="whitespace-nowrap font-medium tracking-wide">{text}</p>
    </div>
  </Link>
);

export default NavBarIcon;
