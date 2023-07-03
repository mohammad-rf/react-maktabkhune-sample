import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

let SliderTypeB = (props) => {
  let slider = props.data.map((x, index) => {
    return (
      <SwiperSlide key={index}>
        <img alt="" src={x.img} />
      </SwiperSlide>
    );
  });

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
        // navigation={true}
        slidesPerView={6}
      >
        {slider}
      </Swiper>
    </div>
  );
};

export default SliderTypeB;
