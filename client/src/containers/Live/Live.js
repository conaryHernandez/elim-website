import React from 'react';
import styles from './Live.module.scss';
import { cdnPath } from '../../constants';

export default function Live() {
  return (
    <div id={styles.liveVw}>
      <div className={styles.mainBanner}>
        <div className={styles.mainBannerOverlay} />
        <img
          src={`${cdnPath}/v2/images/home/main-slider/alabanza-2020.jpg`}
          alt="Live Banner"
        />
      </div>
      <div className="container">
        <div className={styles.iframeWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/live_stream?channel=UCLabTb6ZU_MtZf1KG8chE2A"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h1>En vivo</h1>
        <span>Sintoniza nuestros servicios en vivo.</span>

        {/* <iframe
            title="CHURCH @ HOME"
            width="100%"
            height="560"
            src="https://www.youtube.com/embed/live_stream?channel=UCOAjX8pc2fY1S5AqsXvZywg&autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
      </div>
    </div>
  );
}
