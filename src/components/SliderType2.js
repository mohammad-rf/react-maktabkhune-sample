import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

let SliderType2 = (props) => {
  const cards = props.data.map((item) => {
    return (
      <SwiperSlide key={item.price}>
        <Card image={item.img} price={item.price} />
      </SwiperSlide>
    );
  });
  let titles = " جدیدترین دوره های مکتب پلاس";
  return (
    <div className="slider rounded-2">
      <div className="slider-title"> {titles} </div>
      <div className="swiper-wrapper">
        <Swiper spaceBetween={26} slidesPerView={"auto"}>
          {cards}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderType2;
