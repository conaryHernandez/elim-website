import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Mission.module.scss';
import { cdnPath } from '../../constants';

export default function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.Mission}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/mission/directivos.jpg`}
          alt="Mission Banner"
        />
      </div>
      <div className="container">
        <div className={styles.beliefs}>
          <h1 className="txt-center section-title">¿En qué creemos?</h1>
          <Row justify="center">
            <Col xs={24} md={16}>
              <p>
                Como Misión creemos firmemente en lo que la Biblia afirma y
                enseña como la revelación más segura. Reconociendo la labor de
                un Dios tri-uno en todas las eras de la historia humana.
              </p>
              <p>
                Confesamos que hay un solo Dios verdadero y viviente, el
                Creador, Redentor, Sustentador y Gobernador de todas las cosas.
                Él es infinito, eterno, inmutable y se ha revelado y manifestado
                a nosotros como Dios Padre, Dios Hijo y Dios Espíritu Santo.
              </p>
            </Col>
          </Row>
        </div>
        <Link to="/iglesias">Ver iglesias</Link>
      </div>
      <div className={styles.sloganWrapper}>
        <img
          src={`${cdnPath}/v2/images/mission/slogan-banner.jpg`}
          alt="Slogan"
        />
        <h2 className="txt-center">
          Una Misión exclusivamente al servicio de Dios.
        </h2>
      </div>
      <div className={`${styles.ourPastor} container`}>
        <h3 className="section-title">Nuestro pastor</h3>
        <Row justify="center" align="middle">
          <Col xs={24} md={12}>
            <p>
              <strong>Rafael Ismael Paz Sabillón</strong> es hijo del matrimonio
              de Victoriano Álvaro Paz y Rufina Sabillón, jóvenes cristianos
              hondureños, su padre fue un labrador y predicador de la palabra de
              Dios quien hacía la obra misionera en aldeas y caseríos de Santa
              Bárbara, Victoriano Paz en medio de la persecución religiosa logró
              sembrar la semilla que germinó y creció, ocupó el cargo de pastor
              de la Iglesia Evangélica Centroamericana en Colinas Santa Bárbara
              una iglesia de raíces misioneras con propósito de predicar el
              evangelio en América Central.
            </p>
          </Col>
          <Col xs={24} md={12} className="txt-center hidden-large-down">
            <img
              src={`${cdnPath}/v2/images/mission/pastor-preaching.jpg`}
              className={`${styles.preaching} img-responsive`}
              alt="Pastor y Esposa"
            />
          </Col>
        </Row>

        <Row justify="center" align="middle" style={{ marginTop: '4rem' }}>
          <Col xs={24} md={12} className="txt-center">
            <img
              src={`${cdnPath}/v2/images/mission/pastores-couple.png`}
              className={`${styles.pastoresCouple} img-responsive`}
              alt="Pastor y Esposa"
            />
          </Col>
          <Col xs={24} md={12}>
            <p>
              En 1968 se casó con Marina Sabillón, con quien procreó seis hijos,
              <strong> entregó su vida al Señor</strong> el 18 de febrero de
              1968 en una campaña con el Evangelista David García en el Barrio
              Paz Barahona de la ciudad de San Pedro Sula, congregándose
              posteriormente en la Iglesia Cuadrangular de los años 1968 a 1974,
              siendo su pastor el hermano Ángel Bonilla, donde recibió su
              formación como cristiano.
            </p>
            <p>
              El <strong>25 de septiembre de 1974</strong> el hermano Ismael Paz
              junto con un grupo de hermanos fundó la primera Iglesia Evangélica
              Elim en Honduras, posteriormente al igual que su padre llevó la
              palabra de Dios a diferentes aldeas y caseríos de las montañas de
              Atlántida fundando así varias iglesias en ese sector y en
              diferentes zonas del país convirtiéndose la Iglesia Evangélica
              Elim en Misión Cristiana Elim una Misión exclusivamente al
              servicio de Dios.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
