import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = props => {
  return (
    <Carousel>
      {props.photos.map(photo => (
        <div>
          <img alt={photo.src} src={photo.src} />
          <p className="legend">{photo.legend || ''}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
