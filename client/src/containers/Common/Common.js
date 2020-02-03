import React from 'react';
import RowGallery from '../../components/Gallery/RowGallery';
import Slider from '../../components/Slider/Slider';

import { photos } from './photos';
import Spinner from '../../components/UI/Spinner/Spinner';

const Common = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <RowGallery photos={photos} />
      <h1>Slider</h1>
      <Slider photos={photos.filter(el => el.height === 3)} />
      <h1>UI Elements</h1>
      <Spinner />
    </div>
  );
};

export default Common;
