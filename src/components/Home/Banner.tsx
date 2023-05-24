import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="banner mt-10 relative h-[200px] md:h-[300px]">
      <div className="absolute custom-backdrop w-full h-full opacity-[0.5]"></div>
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
