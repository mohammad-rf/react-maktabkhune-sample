import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";

<<<<<<< Updated upstream:src/components/Slider3.js
import img1 from "../image/sl-3/0b25e9f769cb66f194ed505f19e962e4.webp";
import img2 from "../image/sl-3/80e8d8241f9e419d77c59dc7196c49b4.webp";
import img3 from "../image/sl-3/99271d8e6eddabc6d459d75d1e39c882.webp";
import img4 from "../image/sl-3/acc15b8d7005effee0d34831dc20bdc6.webp";
import img5 from "../image/sl-3/0b25e9f769cb66f194ed505f19e962e4.webp";
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
          <div className="course-title"> آموزش برنامه‌نویسی مقدماتی Rust</div>
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

let Slider3 = () => {
  return (
    <div className="slider rounded-2">
      <div className="slider-title">جدیدترین دوره های مکتب پلاس</div>
=======
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

>>>>>>> Stashed changes:src/components/Slider.js
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
