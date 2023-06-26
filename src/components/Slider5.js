import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";

import img1 from "../image/sl-5/15f6f2c59a01706820175bfb1acfe140.webp";
import img2 from "../image/sl-5/29d09cfdbb4a922ed92a7379024532ce.webp";
import img3 from "../image/sl-5/8241682434dde8e79872fe9ade4642cd.webp";
import img4 from "../image/sl-5/d360b0594d36bb7b1988cab6e3d74719.webp";
import img5 from "../image/sl-5/15f6f2c59a01706820175bfb1acfe140.webp";
import img6 from "../image/sl-3/99271d8e6eddabc6d459d75d1e39c882.webp";
import img7 from "../image/sld-2/163bdfbdeb9ff22c29b8aa8dcf0dea2f.webp";
import img8 from "../image/sld-2/5f9f74878bce927d2eec5ea0defde04e.jpg";

let SliderContent = (props) => {
  return (
    <div className="course-card">
      <a className="course-card--img" href="w">
        <img className="w-100 object-fit-cover" alt=" " src={props.img} />
      </a>
      <div className="course-card--content">
        <a href="i">
          <div className="course-title"> آموزش سئو خارجی</div>
          <div className="course-producter">
            <div>
              <img alt="" src={logo} />
              مکتب خونه
            </div>
            <div className="course-producter--author">محدثه شهربندیان</div>
          </div>
          <div className="course-price">22000 تومان</div>
        </a>
        <div className="course-buy">
          <button className="btn-buy">خرید دوره</button>
        </div>
      </div>
    </div>
  );
};

let Slider5 = () => {
  return (
    <div className="slider rounded-2">
      <div className="slider-title">
        {" "}
        ⚡پیشنهاد میرزا 🔥تخفیف‌های ویژه امروز مکتب‌خونه{" "}
      </div>
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

export default Slider5;
