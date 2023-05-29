import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { FaHamburger } from "react-icons/fa";
import { useRef } from "react";
import ContactBox from "./components/ContactBox";
import Stickers from "./components/Stickers";

const App = () => {
  const profileRef = useRef<HTMLDivElement | null>(null);

  const handleShow = () => {
    if (profileRef.current) {
      profileRef.current.style.display = "block";
    }
  };

  const handleHide = () => {
    if (profileRef.current) {
      profileRef.current.style.display = "none";
    }
  };
  return (
    <div className="main">
      <div className="lg:hidden w-full top-0 fixed p-4 z-20 bg-background-1 ">
        <div className=" text-slate-300" onClick={() => handleShow()}>
          <FaHamburger />
        </div>
      </div>
      <SideBar handleHide={handleHide} sideRef={profileRef} />
      <div className="md:ml-0 lg:ml-[350px] md:mt-[50]px p-2">
        <Home />
        <Projects />
        <Education />
        <ContactBox />
        <Stickers />
      </div>
    </div>
  );
};

export default App;
