import CircularProgressSideBar from "./Sidebar/CircularProgressSideBar";
import ProfileSideBar from "./Sidebar/ProfileSideBar";
import LineProgressSideBar from "./Sidebar/LineProgressSideBar";
import KeyPoints from "./Sidebar/KeyPoints";
import { SoftSkills } from "./Sidebar/SoftSkills";
import SocialIcons from "./Sidebar/SocialIcons";
import {RxCross2} from 'react-icons/rx'
import React from "react";

type ChildComponentProps = {
  sideRef: React.RefObject<HTMLDivElement>,
  handleHide : () => void,
}

const SideBar:React.FC<ChildComponentProps> = ({sideRef,handleHide}) => {
  return (
    <div ref={sideRef} className="w-[300px] h-[100vh] fixed sidebar top-0 hidden md:block z-30">
      <ProfileSideBar />
      <div className="absolute top-3 right-3 z-30 text-xl md:hidden" onClick={()=>handleHide()} ><RxCross2/></div>
      <div className="scroll-content p-4">
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
