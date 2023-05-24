import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import data from "../../data";
import { MdDone } from "react-icons/md";
import { Badge, Button, Image } from "antd";
import { useRef } from "react";
const ProjectSlider = () => {
  const swiperRef = useRef<any | null>();

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={"auto"}
      navigation
      loop={true}
      autoplay={{ delay: 2000 }}
      ref={swiperRef}
      className="mt-4"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 992
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 1200
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {data.projects.map((elem) => (
        <SwiperSlide>
             <Badge.Ribbon text={elem.tag} color="magenta">
          <div
            className="p-4 h-[400px] text-sm custom-backdrop rounded-lg project relative "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="h-[200px] w-full">
              <Image
                width={"100%"}
                height={"100%"}
                className="w-full m-auto  object-cover"
                src={elem.img}
              />
            </div>
            <p className=" font-medium text-md text-white mt-2">{elem.name}</p>
            <p className="mt-1">{elem.desc}</p>
            <div className="w-full left-0 h-[180px] right-0 mt-2 absolute bottom-1 bg-background-0 features animate-slideInFromBottom p-4 rounded-2xl">
              {elem.features.map((elem,index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <p className="text-text-yellow">
                    <MdDone />
                  </p>
                  <p>{elem}</p>
                </div>
              ))}
              <div className="absolute flex gap-2 mt-2">
                <Button
                  type="ghost"
                  shape="round"
                  className="border-none text-white bg-purple-700"
                  href={elem.live}
                  target="_blank"
                >
                  Live
                </Button>
                <Button
                  type="ghost"
                  shape="round"
                  className="border-none bg-black text-white"
                  target="_blank"
                  href={elem.github}
                >
                  Github
                </Button>
              </div>
            </div>
            <div className=" flex gap-1 flex-wrap mt-3">
              {elem.tech_stack.map((elem) => (
                <p className=" text-xs bg-black pl-3 pr-3 pt-1 pb-1 rounded-full">
                  {elem}
                </p>
              ))}
            </div>
          </div>
          </Badge.Ribbon>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
