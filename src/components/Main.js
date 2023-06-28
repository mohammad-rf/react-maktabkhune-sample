import React from "react";
import {
  Slider1,
  Slider2,
  Slider,
  Slider4,
  Slider5,
  Banner,
  Footer,
  imgBaner1,
  imgBaner2,
  imgBaner3,
  data,
} from "./index";

let Main = () => {
  return (
    <main>
      <div className="container-xl">
        <Slider1 />
        <Slider2 />
        <Slider />
        <Slider4 />
        <Banner img={imgBaner1} />
        <Slider1 />
        <Banner img={imgBaner2} />
        <Slider5 />
        <Slider />
        <Banner img={imgBaner3} />
        <Slider2 />
      </div>
    </main>
  );
};

export default Main;
