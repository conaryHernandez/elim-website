import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cdnPath } from '../../constants';
import styles from './Central.module.scss';
import Slider from 'react-slick';
import { RightOutlined } from '@ant-design/icons';
import { serviceAreas } from './centralData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
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

export default function Central() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateAreasSlides = (servicesAreas) => {
    return servicesAreas.map((area, index) => {
      return (
        <div key={index} className="slider-item">
          <div className="slider-item-inner">
            <img
              src={`${cdnPath}${area.imgURL}`}
              alt="${area.imgAltText}"
              className="slide-image img-responsive"
            />
            <div className="textBox alabanza">
              <strong>{area.title}</strong>
              <p>{area.caption}</p>
              <Link to={area.link} className="area-link">
                {area.linkLabel}
                <RightOutlined />
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.Central}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/central/elim-central-bg-2.jpg`}
          alt="Elim Central"
        />
      </div>

      <div className="container">
        <div className={styles.intro}>
          <h1 className="section-title">Huellas del pasado</h1>

          <p>
            Misión Cristiana Elim Honduras, surge básicamente de la necesidad de
            buscar a Dios en oración en el año 1974. Un grupo de hermanos se
            reunía a buscar de Dios y como consecuencia de esa búsqueda el grupo
            creció. Se comenzó a predicar y el Señor continuó añadiendo de él y
            visitando con su presencia en cada reunión.
          </p>

          <p>
            Debido al crecimiento se vio la necesidad de buscar a alguien que se
            hiciera cargo del grupo, que ya eran aproximadamente unos treinta
            hermanos; desde ese momento fue reconocido por este grupo como su
            Pastor y consejero espiritual el hermano Rafael Ismael Paz.
          </p>
        </div>
      </div>

      <div className={`${styles.servicesAreas} section-gray`}>
        <h3 className="section-title">Áreas de servicio</h3>
        <Slider {...settings}>{generateAreasSlides(serviceAreas)}</Slider>
      </div>
    </div>
  );
}
