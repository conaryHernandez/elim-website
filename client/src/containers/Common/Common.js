import React from 'react';
import RowGallery from '../../components/Gallery/RowGallery';
import Slider from '../../components/Slider/Slider';

import { photos } from './photos';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import SocialBar from '../../components/SocialBar/SocialBar';

const Common = () => {
  return (
    <div>
      <h1>Social Bar</h1>
      <SocialBar />
      <h1>Gallery</h1>
      <RowGallery photos={photos} />
      <h1>Slider</h1>
      <Slider photos={photos.filter(el => el.height === 3)} />
      <h1>UI Elements</h1>
      <Spinner />
      <Button size="small">Add</Button>
    </div>
  );
};

export default Common;
