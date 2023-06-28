import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import {
  img10Slr1,
  img11Slr1,
  img12Slr1,
  img13Slr1,
  img14Slr1,
  img15Slr1,
  img16Slr1,
  img1Slr1,
  img2Slr1,
  img3Slr1,
  img4Slr1,
  img5Slr1,
  img6Slr1,
  img7Slr1,
  img8Slr1,
  img9Slr1,
} from "./index.jsx";

// let Slide = (props) => {
//   return (
//     <SwiperSlide>
//       <img src={props.img} alt="" />
//     </SwiperSlide>
//   );
// };

let Slider1 = () => {
  return (
    <div className="learning-ways">
      <div className="d-flex justify-content-between">
        <div className="fw-bold fs-5">مسیر های یادگیری</div>
        <div className="">
          مشاهده همه
          <i class="fa-solid fa-angle-left"></i>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        // onSwiper={setSwiperRef}
        // navigation={true}
        slidesPerView={6}
      >
        <SwiperSlide>
          <img alt="1" src={img9Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img10Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img12Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img13Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img14Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img15Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img11Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img16Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img1Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img2Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img3Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img4Slr1} />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="1" src={img5Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img6Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img7Slr1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img8Slr1} />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper spaceBetween={50} slidesPerView={10}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
      </Swiper> */}
    </div>
  );
};

export default Slider1;
