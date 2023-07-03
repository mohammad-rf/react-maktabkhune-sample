import React from "react";
import SliderType2 from "./SliderType2.js";
import SliderType1 from "./SliderType1.js";
import {
  imgBaner1,
  imgBaner2,
  imgBaner3,
  Banner,
  dataSlider1,
  dataSlider2,
  dataSlider3,
  dataSlider4,
  dataSlider5,
} from "./index.jsx";

let Main = () => {
  return (
    <main>
      <div className="container-xl">
        <SliderType1 data={dataSlider1} />
        <SliderType2 data={dataSlider2} />
        <Banner img={imgBaner1} />
        <SliderType2 data={dataSlider3} />
        <SliderType2 data={dataSlider4} />
        <SliderType2 data={dataSlider5} />
        <Banner img={imgBaner2} />
        <SliderType2 data={dataSlider2} />
        <SliderType2 data={dataSlider3} />
        <Banner img={imgBaner3} />
        <SliderType2 data={dataSlider4} />
      </div>
    </main>
  );
};

export default Main;
