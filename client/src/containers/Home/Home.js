import React from "react";
import { photos } from "./main-slides";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";

const settings = {
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  showIndicators: false,
  legendClassName: classes.homeLegend
};

const Home = () => {
  return (
    <div className={classes.Home}>
      <Slider photos={photos.map(el => el)} settings={settings} />
    </div>
  );
};

export default Home;
