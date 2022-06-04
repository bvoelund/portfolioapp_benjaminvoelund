import { useEffect, useState } from "react";
import useDarkMode from "./hooks/useDarkMode";
import useScrollPosition from "./hooks/useScrollPosition";
import NavBar from "./components/NavBar";
import ScrollToTopButton from "./components/minor/ScrollToTopButton";
import SideBar from "./components/SideBar";
import MainContentContainer from "./components/containers/MainContentContainer";
import Footer from "./components/Footer";

// APP TODO:
// - Fix conditional styling!!

function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();

  const handleMode = () => setDarkTheme(!darkTheme);

  const scrollPos = useScrollPosition();

  const [toggleSideBar, setToggleSideBar] = useState(false);

  //Disables scrolling while sidebar is active
  useEffect(() => {
    if (toggleSideBar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [toggleSideBar]);

  return (
    <div
      className={
        "bg-gradient-to-r from-[#f3a183] to-[#ec6f66] dark:from-[#185a9d] dark:to-[#43cea2]  text-[#111827] dark:text-white transition ease-in-out duration-100 scroll-smooth w-screen cantarell"
      }
    >
      <ScrollToTopButton scrollPosition={scrollPos} />

      {/* Header */}
      <NavBar
        darkModeEnabled={darkTheme}
        toggleTheme={handleMode}
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />

      <SideBar show={toggleSideBar} toggleShow={setToggleSideBar} />

      {/* Main Content */}
      <MainContentContainer scrollPosition={scrollPos} />

      <Footer />
    </div>
  );
}

export default App;
