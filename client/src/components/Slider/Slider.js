import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = props => {
  return (
    <Carousel {...props.settings}>
      {props.photos.map((photo, index) => (
        <div key={index}>
          <img alt={photo.src} src={photo.src} />
          {photo.legend && (
            <p className={props.settings.legendClassName}>
              {photo.legend || ""}
            </p>
          )}
        </div>
      ))}
    </Carousel>
  );
};

Slider.defaultProps = {
  settings: {},
  photos: {}
};
export default Slider;
