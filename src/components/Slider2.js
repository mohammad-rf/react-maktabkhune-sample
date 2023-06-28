import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";
import {
  img1Slr2,
  img2Slr2,
  img3Slr2,
  img4Slr2,
  img5Slr2,
  img6Slr2,
  img7Slr2,
  img8Slr2,
} from "./index";

let SliderContent = (props) => {
  return (
    <div className="course-card bg-blue-dark ">
      <a className="course-card--img " href="w">
        <img className="w-100 object-fit-cover" alt=" " src={props.img} />
      </a>
      <div className="course-card--content">
        <a href="i">
          <div className="course-title txt-orange-dark">تحلیل کسب و کار</div>
          <div className="course-producter text-white ">
            <div className="d-flex align-items-center">
              <div className="logo-wrapper me-2 p-1">
                <img className="m-0" alt="" src={logo} />
              </div>
              مکتب خونه
            </div>
            <div className="course-producter--author  text-white">
              محدثه شهربندیان
            </div>
          </div>
          <div className="course-price txt-orange-dark">22000 تومان</div>
        </a>
        <div className="course-buy">
          <button className="btn-buy">خرید دوره</button>
        </div>
      </div>
    </div>
  );
};

let Slider2 = () => {
  return (
    <div className="slider rounded-2">
      <div className="slider-title"> 🎓 وقت مُتِخَصِص شُدَنــه🔥 </div>
      <div className="swiper-wrapper">
        <Swiper spaceBetween={26} slidesPerView={"auto"}>
          <SwiperSlide>
            <SliderContent img={img1Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img2Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img3Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img4Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img5Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img6Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img7Slr2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent img={img8Slr2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;
