import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";

import img1 from "../image/sl-4/13637808bf9f938b487495e27f9a0a31.jpg";
import img2 from "../image/sl-4/301f5227d74fabf27f2abd6ddeb26234.jpg";
import img3 from "../image/sl-4/f5ff3148ec457b8b7bfd75512ac3719e.jpg";
import img4 from "../image/sl-4/caff65e264b0367146368cc4361df511.jpg";
import img5 from "../image/sl-4/46591773c201f54d66b2f52879f25095.jpg";
import img6 from "../image/sl-4/8307a8eb3bd4ab0b024b73c4ecb4e58c.jpg";
import img7 from "../image/sl-4/f5ff3148ec457b8b7bfd75512ac3719e.jpg";
import img8 from "../image/sl-4/8307a8eb3bd4ab0b024b73c4ecb4e58c.jpg";

let SliderContent = (props) => {
  return (
    <div className="course-card">
      <a className="course-card--img" href="w">
        <img className="w-100 object-fit-cover" alt=" " src={props.img} />
      </a>
      <div className="course-card--content">
        <a href="i">
          <div className="course-title"> آموزش پایتون مقدماتی </div>
          <div className="course-producter">
            <div>
              <img alt="" src={logo} />
              مکتب خونه
            </div>
            <div className="course-producter--author">جادی میرمیرانی</div>
          </div>
          <div className="course-price">459000 تومان</div>
        </a>
        <div className="course-buy">
          <button className="btn-buy">خرید دوره</button>
        </div>
      </div>
    </div>
  );
};

let Title = () => {
  return <div className="slider-title">جدیدترین دوره های مکتب پلاس</div>;
};
let Category = () => {
  return (
    <>
      <div className=" category d-flex ">
        <button className="btn">برنامه نویسی</button>
        <button className="btn"> آی‌تی و نرم‌افزار</button>
        <button className="btn"> مدیریت و کسب و کار </button>
        <button className="btn"> دانشگاهی: فنی و مهندسی</button>
        <button className="btn">برنامه نویسی</button>
        <button className="btn"> دانشگاهی: فنی و مهندسی</button>
        <button className="btn"> مدیریت و کسب و کار </button>
        <button className="btn">برنامه نویسی</button>
        <button className="btn">برنامه نویسی</button>
        <button className="btn">برنامه نویسی</button>
      </div>
    </>
  );
};

let Slider4 = () => {
  return (
    <div className="slider rounded-2">
      <Title />
      <Category />
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

export default Slider4;
