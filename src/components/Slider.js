import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from "react";
import data from "../data";
import Slide from "./Slide";
import SwiperCore, {
  Pagination,
  Scrollbar,
  Navigation,
  A11y,
  Autoplay,
} from "swiper";

// install Swiper modules
// SwiperCore.use([Pagination]);
// SwiperCore.use([Scrollbar]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

const Slider = () => {
  const [direction, setDirection] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [asyncDisplay, setAsyncdisplay] = useState("");

  const asyncRef = useRef();

  const updateWidth = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  const updateSliderDirection = () => {
    const asyncDisplay = window.getComputedStyle(asyncRef.current).display;
    // console.log(asyncDisplay);
    if (asyncDisplay == "none") {
      setDirection("vertical");
    } else if (asyncDisplay == "block") {
      setDirection("horizontal");
    }
  };

  useEffect(() => {
    updateSliderDirection();
  }, [width]);

  useEffect(() => {
    updateSliderDirection();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        direction={direction}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <div ref={asyncRef} className="async"></div>
        <div className="swipeBtn nextBtn">
          <img src="images/icons/Arrowdown4.png" alt="" />
        </div>
        <div className="swipeBtn prevBtn">
          <img src="images/icons/Arrowdown3.png" alt="" />
        </div>
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
