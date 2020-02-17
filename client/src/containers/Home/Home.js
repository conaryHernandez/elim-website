import React from "react";
import { photos } from "./main-slides";
import Slider from "../../components/Slider/Slider";
import { Row, Col } from "antd";
import classes from "./Home.module.scss";
import pastor from "../../assets/img/home/dr-rafael-ismael.png";

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
      <div className="container">
        <div className={classes.pastorMessage}>
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={24} md={10} lg={8} xl={10} className="txt-center">
              <img
                className={classes.pastorAvatar}
                src={pastor}
                alt="Pastor Ismael Paz"
              />
            </Col>
            <Col xs={24} md={14} lg={8} xl={10}>
              <h1>Palabras de Vida</h1>
              <p className={classes.introText}>
                El enfoque que cada quien tenga de la vida, puede depender de la
                clase de semilla que haya sembrado o le hayan sembrado.
              </p>

              <p className={classes.introText}>
                Las respuestas postreras después de la siembra, no siempre son
                fáciles de expresar, no hay una sola y simple solución a los
                graves problemas de la vida; o si la hay, ¡yo no lo he
                descubierto todavía! la vida no es fácil y nunca lo ha sido.
              </p>
              <a className={`${classes.readMore} uppercase txt-center`} href="">
                Leer más
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
