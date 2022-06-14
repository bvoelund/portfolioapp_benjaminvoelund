import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [footerRef, inView] = useInView();

  //Thanks for stopping by &#128075;
  return (
    <div ref={footerRef} className="h-20 w-screen">
      <div className={inView ? "h-full grid place-items-center" : "hidden"}>
        <div className="typing-animation-footer w-[20ch] whitespace-nowrap overflow-hidden font-semibold text-base md:text-lg">
          Thanks for stopping by! &#128075;
        </div>
      </div>
    </div>
  );
};

export default Footer;
