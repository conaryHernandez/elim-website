import React, { useEffect } from 'react';
import styles from './Youth.module.scss';
import { activities } from './youthData';
import { Link } from 'react-router-dom';
import { cdnPath } from '../../constants';
import { Row, Col } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'cards-slider',
  centerMode: true,
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

export default function Youth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateActivitiesSlides = (activities) => {
    return activities.map((activity, index) => {
      return (
        <div className="slider-item">
          <div className="slider-item-inner">
            <img
              src={`${cdnPath}${activity.imgURL}`}
              alt="${activity.imgAltText}"
              className="slide-image img-responsive"
            />
            <div className="textBox">
              <strong>{activity.title}</strong>
              <p>{activity.caption}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.youth}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/central/youth/jovenes-elim-bg.jpg`}
          alt="Jovenes elim"
        />
      </div>
      <div className="container">
        <div className={styles.intro}>
          <h1 className="section-title">Juventud apartada para Cristo</h1>

          <p>
            Misión Cristiana Elim siempre ha valorado el enorme legado que una
            juventud restaurada y apartada para Cristo puede aportar a una
            sociedad que cada día va en decadencia. A través de muchas
            generaciones, nuestros jóvenes se han caracterizado por servir con
            pasión en la obra de Dios.
          </p>

          <p>
            Fruto de estas generaciones ha sido el llamado al ministerio de
            Pastores, como los hermanos: Melitón Rodríguez, Geovani Gambareli,
            Miguel Flores, Víctor Manuel López, Josué Alexis Barrientos, Julio
            Lobo, Adalberto Muñoz, José Aníbal Fajardo, Hugo Medina, entre
            tantos que podríamos mencionar. Jóvenes que buscaban continuamente
            la presencia de Dios, la revelación de la Palabra y de los cuales
            hay testimonios poderosos de lo que Dios puede hacer en la vida de
            un joven que decide entregarse por completo a Dios.
          </p>
        </div>
      </div>
      <div className={styles.gallery}>
        <Row>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/youth/campamentos-5.jpg`}
              alt="Juventud Elim"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/youth/campamentos-11.jpg`}
              alt="Juventud Elim juegos"
            />
          </Col>

          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/youth/campamentos-6.jpg`}
              alt="Juventud Elim actividades"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/youth/campamentos-10.jpg`}
              alt="Juventud Elim Campamentos"
            />
          </Col>
        </Row>
      </div>
      <div className={`${styles.vision} section-gray`}>
        <div className="container">
          <h2 className="section-title">Vision</h2>
          <p>
            Es nuestro anhelo que los jóvenes sean llenos del Espíritu Santo,
            que experimenten y disfruten el amor de Dios no como una religión,
            sino como una constante vivencia personal y voluntaria que los
            conduzca al cumplimiento del diseño y plan de Dios para sus vidas.
          </p>
        </div>
      </div>
      <div className={`${styles.activitiesSlider} section-gray`}>
        <h3 className="section-title">Campamentos</h3>
        <Slider {...settings}>{generateActivitiesSlides(activities)}</Slider>
      </div>

      <div className={styles.presidentMessage}>
        <div className="container">
          <Row justify="center" align="middle">
            <Col xs={24} sm={6}>
              <img
                className="img-responsive"
                src={`${cdnPath}/v2/images/central/youth/president-jovenes.png`}
                alt="Presidente de jovenes"
              />
            </Col>
            <Col xs={24} sm={{ span: 14, offset: 1 }}>
              <h3>Dios con nosotros</h3>
              <p>
                Estamos seguros que Dios sigue y seguirá haciendo su obra
                perfecta en cada generación de jóvenes que se vaya levantando y
                que continuarán siendo influencia y luz en nuestra nación.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
