import { TypeAnimation } from "react-type-animation";
import hi from '../../assets/hi.png'
const Banner = () => {
  return (
    <div className="banner mt-10 relative h-[200px] md:h-[300px] overflow-hidden">
      <div className="absolute custom-backdrop w-full h-full opacity-[0.8]"></div>
      <div className=" hidden md:block absolute right-0 w-[300px] h-full hover:scale-110 hover:ease-in-out duration-200"><img src={hi} className="w-full h-full" /></div>
      <div className="absolute h-full text-white p-4 pt-8 md:p-20">
        <p className="text-4xl md:text-6xl font-bold custom-orange">hi.</p>
        <p className="text-4xl md:text-6xl font-semibold custom-orange">
          Welcome
        </p>
        <code className="text-xl">
          &lt;<i className=" text-red-500" >code</i>&gt; 
           <TypeAnimation
            sequence={[
              "A Developer", 
              1000, 
              "An Engineer",
              2000,
              "Learner",
              3000,
              "Tech Hungry ",
              4000,
            ]}
            cursor={true}
            repeat={Infinity}
          />
          &lt;<i className=" text-red-500" >/code</i>&gt;{" "}
        </code>
      </div>
    </div>
  );
};

export default Banner;
