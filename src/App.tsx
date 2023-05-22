import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { FaHamburger } from "react-icons/fa";
import { useRef } from "react";

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
      <div className="w-full top-0 fixed p-4 z-20 bg-background-1">
        <div onClick={() => handleShow()}>
          <FaHamburger />
        </div>
      </div>
      <SideBar handleHide={handleHide} sideRef={profileRef} />
      <div className="sm:ml-0 md:ml-[350px] md:mt-[50]px p-2">
        <Home />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default App;