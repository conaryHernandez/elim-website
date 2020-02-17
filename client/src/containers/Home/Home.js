import React from "react";
import { photos } from "./main-slides";
import Slider from "../../components/Slider/Slider";

const settings = {
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true
};

const Home = () => {
  return (
    <div>
      <Slider photos={photos.map(el => el)} settings={settings} />
    </div>
  );
};

export default Home;
