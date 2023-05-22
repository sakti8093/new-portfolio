import ReactDOM from "react-dom/client";
import "./index.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="main">
    <SideBar />
    <div className="content">
      <Home />
      <Projects />
      <Education />
    </div>
  </div>
);
