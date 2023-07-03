import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4Dynamic";
import Slider5 from "./Slider5";
import Banner from "./Banner";
import Footer from "./Footer";
import imgBaner1 from "../image/Carousel-Dsk_BKNH4IU.jpg";
import imgBaner2 from "../image/banner/Carousel-Dsk_c4RCvDT.jpg";
import imgBaner3 from "../image/banner/Carousel-Dsk_mrZZ4yK.jpg";

let Main = () => {
  return (
    <main>
      <div className="container-xl">
        <Slider1 />
        <Slider2 />
<<<<<<< Updated upstream
        <Slider3 />
=======
        <Slider data={data} />
>>>>>>> Stashed changes
        <Slider4 />
        <Banner img={imgBaner1} />
        <Slider1 />
        <Banner img={imgBaner2} />
        <Slider5 />
        <Slider3 />
        <Banner img={imgBaner3} />
        <Slider2 />
      </div>
    </main>
  );
};

export default Main;
