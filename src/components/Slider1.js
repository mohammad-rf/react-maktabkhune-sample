import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import img1 from "../image/11_pyMwKlu.jpg";
import img2 from "../image/1_hkxdtct.jpg";
import img3 from "../image/20_3upx5r9.webp";
import img4 from "../image/22_j5wuJ3f.webp";
import img5 from "../image/23_dVldLDo.webp";
import img6 from "../image/24_ZTYqWuw.webp";
import img7 from "../image/25_jatdoJa.webp";
import img8 from "../image/27_YzyH9Xe.webp";
import img9 from "../image/36_qjFXfra.webp";
import img10 from "../image/20_3upx5r9.webp";
import img11 from "../image/21_FbeRELy.webp";
import img12 from "../image/22_j5wuJ3f.webp";
import img13 from "../image/23_dVldLDo.webp";
import img14 from "../image/24_ZTYqWuw.webp";
import img15 from "../image/25_jatdoJa.webp";
import img16 from "../image/27_YzyH9Xe.webp";

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
          <i className="fa-solid fa-angle-left"></i>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        // onSwiper={setSwiperRef}
        // navigation={true}
        slidesPerView={6}
      >
        <SwiperSlide>
          <img alt="1" src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img10} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img12} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img13} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img14} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img15} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img11} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img16} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img4} />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="1" src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="1" src={img8} />
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
