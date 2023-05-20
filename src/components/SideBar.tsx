import "./SideBar.css";
import CircularProgressSideBar from "./Sidebar/CircularProgressSideBar";
import ProfileSideBar from "./Sidebar/ProfileSideBar";
import LineProgressSideBar from "./Sidebar/LineProgressSideBar";
import KeyPoints from "./Sidebar/KeyPoints";
import { SoftSkills } from "./Sidebar/SoftSkills";
import SocialIcons from "./Sidebar/SocialIcons";

const SideBar = () => {
  return (
    <div className="w-[300px] h-[100vh] fixed">
      <ProfileSideBar />
      <div className="scroll-content p-4" >
      <CircularProgressSideBar />
      <LineProgressSideBar />
      <KeyPoints />
      <SoftSkills />
      </div>
      <SocialIcons />
    </div>
  );
};

export default SideBar;
