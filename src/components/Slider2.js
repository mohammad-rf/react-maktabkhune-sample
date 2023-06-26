import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import logo from "../image/logo_small.png";

import img1 from "../image/sld-2/163bdfbdeb9ff22c29b8aa8dcf0dea2f.webp";
import img2 from "../image/sld-2/5f9f74878bce927d2eec5ea0defde04e.jpg";
import img3 from "../image/sld-2/6c5737b09cca5e6da4bf236bce8e22c9.webp";
import img4 from "../image/sld-2/8e43b158913ef1bae367621cef7ccae3.webp";
import img5 from "../image/sld-2/acb6e3d155dda00f35027bd64c6515b1.webp";
import img6 from "../image/sld-2/cd6fe94b5fd97253aabb2fed0c534953.webp";
import img7 from "../image/sld-2/163bdfbdeb9ff22c29b8aa8dcf0dea2f.webp";
import img8 from "../image/sld-2/5f9f74878bce927d2eec5ea0defde04e.jpg";

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

export default Slider2;
