import React from 'react';
import { Row, Col } from 'antd';
import classes from './History.module.scss';

import ElimBanner from '../../assets/img/history/banner-mision-elim.jpg';
import Pastor from '../../assets/img/history/nuestro-pastor.png';
import Pastores from '../../assets/img/history/pastores.png';

const History = () => {
  return (
    <div className={classes.History}>
      <img className={classes.Banner} src={ElimBanner} alt="Mision Elim" />
      <div className={classes.Intro}>
        <div className="container">
          <Row>
            <div className={classes.Section}>
              <Col xs={24} md={14}>
                <h3 className={classes.Title}>Nuestro Pastor</h3>
                <span className={classes.SubTitle}>
                  Rafael Ismael Paz Sabillón
                </span>

                <p>
                  Rafael Ismael Paz Sabillón es hijo del matrimonio de
                  Victoriano Álvaro Paz y Rufina Sabillón, jóvenes cristianos
                  hondureños, su padre fue un labrador y predicador de la
                  palabra de Dios quien hacía la obra misionera en aldeas y
                  caseríos de Santa Bárbara, Victoriano Paz en medio de la
                  persecución religiosa logró sembrar la semilla que germinó y
                  creció, ocupó el cargo de pastor de la Iglesia Evangélica
                  Centroamericana en Colinas Santa Bárbara una iglesia de raíces
                  misioneras con propósito de predicar el evangelio en América
                  Central.
                </p>

                <p>
                  Rafael Ismael Paz Sabillón nació un día miércoles a las 5:00
                  a.m. en casa de su abuelo materno Marcelo Sabillón ubicada en
                  el Bo. Sur de San Luis, Santa Bárbara el 23 de febrero de
                  1938, siendo el mayor de sus hermanos. Su madre Rufina
                  Sabillón y abuelo Marcelo Sabillón fueron los que inculcaron
                  en el pequeño Ismael el estilo de vida del cristianismo.
                  Realizó sus estudios de secundaria en el Instituto Misión
                  Evangélica y José Trinidad Reyes de San Pedro Sula.
                </p>
              </Col>
              <Col xs={24} md={10} className="first-xs last-lg">
                <img
                  className={`${classes.Pastor} img-responsive`}
                  src={Pastor}
                  alt="Nuestro Pastor"
                />
              </Col>
            </div>
          </Row>
          <Row>
            <div className={classes.Section}>
              <Col xs={24} md={10} className="first-xs last-lg">
                <img
                  className={`${classes.Pastores} img-responsive`}
                  src={Pastores}
                  alt="Nuestro Pastor"
                />
              </Col>
              <Col xs={24} md={14}>
                <p>
                  En 1968 se casó con Marina Sabillón, con quien procreó seis
                  hijos, entregó su vida al Señor el 18 de febrero de 1968 en
                  una campaña con el Evangelista David García en el Barrio Paz
                  Barahona de la ciudad de San Pedro Sula, congregándose
                  posteriormente en la Iglesia Cuadrangular de los años 1968 a
                  1974, siendo su pastor el hermano Ángel Bonilla, donde recibió
                  su formación como cristiano. El hermano Miguel Martínez,
                  Pastor jubilado de la Iglesia Cuadrangular era uno de los
                  Ministros a quien el hermano Ismael Paz solicitaba consejo
                  para las interrogantes que venían a su vida, quien tenía como
                  principio pedir la respuesta al Señor en oración antes de
                  darle un consejo.
                </p>

                <p>
                  El 25 de septiembre de 1974 el hermano Ismael Paz junto con un
                  grupo de hermanos fundó la primera Iglesia Evangélica Elim en
                  Honduras, posteriormente al igual que su padre llevó la
                  palabra de Dios a diferentes aldeas y caseríos de las montañas
                  de Atlántida fundando así varias iglesias en ese sector y en
                  diferentes zonas del país convirtiéndose la Iglesia Evangélica
                  Elim en Misión Cristiana Elim una Misión exclusivamente al
                  servicio de Dios.
                </p>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default History;
