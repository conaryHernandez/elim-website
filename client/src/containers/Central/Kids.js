import React, { useEffect } from 'react';
import styles from './Kids.module.scss';
import { Link } from 'react-router-dom';
import { cdnPath } from '../../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};

export default function Kids() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.kids}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/central/kids/escuela-biblica-bg.jpg`}
          alt="Escuela biblica elim"
        />
      </div>
      <div className="container">
        <div className={styles.intro}>
          <h1 className="section-title">Escuela Bíblica</h1>

          <p>
            Es un área vital e importante en la Iglesia, ya que es el
            responsable de formar e instruir, capacitando a las futuras y
            presentes generaciones en el Conocimiento de la Doctrina Básica del
            Creyente, en la práctica de los Valores, así como Principios
            Cristianos a través de actividades de Proyección
            Evangelística-Social dentro y fuera de la Iglesia.
          </p>

          <p>
            El Departamento de Escuela Bíblica de Misión Cristina Elim, desde
            sus inicios ha sido respaldado y apoyado por nuestro Pastor, como un
            aliado para fomentar la unidad y fortalecimiento de la familia, que
            viene a ser un pilar en el crecimiento y desarrollo del cuerpo de
            Cristo.
          </p>
        </div>
      </div>

      <div className={`${styles.kidsTeam} section-paddings`}>
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <p>
            Formado por aproximadamente 40 Maestros y Ayudas, a quienes el
            dinamismo, pasión y entrega al Servicio del Señor les caracterizan,
            este grupo de personas desarrolla: La Escuela Bíblica Dominical, El
            Culto Infantil ViVi de los días viernes por la Noche, así como
            Campamentos Infantiles entre otras.
          </p>
          <a
            className="regular-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ebehonduras"
          >
            Síguenos en facebook
          </a>
        </div>
      </div>

      <div className={`${styles.kidsSlider} kids-lessons-slider`}>
        <div className="container">
          <h3 className="section-title">
            Instruye al niño <br />
            en su camino
          </h3>
          <Slider {...settings}>
            <div className={styles.slide}>
              <img
                src={`${cdnPath}/v2/images/central/kids/escuela-biblica-4.jpg`}
                alt="Escuela biblica elim"
              />
            </div>
            <div className={styles.slide}>
              <img
                src={`${cdnPath}/v2/images/central/kids/escuela-biblica-2.jpg`}
                alt="Escuela biblica elim"
              />
            </div>

            <div className={styles.slide}>
              <img
                src={`${cdnPath}/v2/images/central/kids/escuela-biblica-3.jpg`}
                alt="Escuela biblica elim"
              />
            </div>

            <div className={styles.slide}>
              <img
                src={`${cdnPath}/v2/images/central/kids/escuela-biblica-5.jpg`}
                alt="Escuela biblica elim"
              />
            </div>
          </Slider>
          <Link className="regular-btn" to="/escuela-biblica-lecciones">
            Ver lecciones
          </Link>
        </div>
      </div>

      <div className={`${styles.kidsVerse}`}>
        <div className="container">
          <h2 className="section-title">Jesús dijo:</h2>
          <p>
            Dejad a los niños venir a mí, y no se lo impidáis; porque de los
            tales es el reino de los cielos.
          </p>
          <strong className={styles.cite}>Mateo 19:14</strong>
        </div>
      </div>
    </div>
  );
}
