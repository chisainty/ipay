import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data";
import Slide from "./Slide";
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y } from "swiper";

// install Swiper modules
// SwiperCore.use([Pagination]);
// SwiperCore.use([Scrollbar]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay
        direction={"vertical"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
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
