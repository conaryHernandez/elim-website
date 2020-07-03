import React, { useEffect } from 'react';
import styles from './Youth.module.scss';
import { Link } from 'react-router-dom';
import { cdnPath } from '../../constants';
import { Row, Col } from 'antd';

export default function Youth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    </div>
  );
}
