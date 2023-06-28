import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper";
import data from "./dataSlider";
import Card from "./Card";

let Slider = () => {
  const cards = data.map((x) => {
    return (
      <SwiperSlide>
        <Card img={x.img} price={x.price} />
      </SwiperSlide>
    );
  });

  return (
    <div className="slider rounded-2">
      <div className="slider-title">جدیدترین دوره های مکتب پلاس</div>

      <div className="swiper-wrapper">
        <Swiper spaceBetween={26} slidesPerView={"auto"}>
          {cards}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
