import React from 'react';

const styles = {
  marginTop: '30px',
  marginBottom: '50px',
};

export default function Live() {
  return (
    <div id="live">
      <div className="container">
        <h1>En vivo</h1>
        <span>Sintoniza nuestros servicios en vivo.</span>

        <div className="iframe-wrapper" style={styles}>
          <iframe
            width="100%"
            height="560"
            src="https://www.youtube.com/embed/live_stream?channel=UCLabTb6ZU_MtZf1KG8chE2A"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

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
