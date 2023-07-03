import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";

let Slider = () => {
  const cards = data.map((item) => {
    return (
      <SwiperSlide key={item.price}>
        {/* <Card img={x.img} price={x.price} /> */}
        <Card item={item} />
      </SwiperSlide>
    );
  });
  let titles = " جدیدترین دوره های مکتب پلاس";
  return (
    <div className="slider rounded-2">
      <div className="slider-title"> {titles} </div>

      <div className="swiper-wrapper">
        <Swiper spaceBetween={26} slidesPerView={"auto"}>
          <SwiperSlide>
            <SliderContent img={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img8} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider3;
