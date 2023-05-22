import data from "../data";
import { GiAchievement } from "react-icons/gi";
const Education = () => {
  return (
    <div>
      <p className="mt-3">Education</p>
      <div className="w-full relative mt-3">
        <div className="absolute w-2 h-full bg-black"></div>
        {data.education.map((elem,index) => (
          <div key={index} className="w-full relative mt-4">
            <div className="absolute rounded-full w-2 h-2 bg-text-yellow top-5"></div>
            <div className=" ml-10 relative custom-backdrop">
              <div className="w-5 h-5 rotate-45 absolute -left-2 top-3 custom-backdrop"></div>
              <div className="w-full ml-4 p-3 text-sm">
                <p className=" text-slate-300 font-bold text-md" >{elem.name}</p>
                <p  >{elem.college}</p>
                <p >{elem.duration}</p>
                <div className="p-2 " >
                {elem.achievements.map((achievement,index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <p>
                      <GiAchievement />
                    </p>
                    <p>{achievement} </p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
