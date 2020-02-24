import React from 'react';
import { Row, Col } from 'antd';
import classes from './History.module.scss';

import ElimBanner from '../../assets/img/history/banner-mision-elim.jpg';
import Pastor from '../../assets/img/history/nuestro-pastor.png';
import Pastores from '../../assets/img/history/pastores.png';
import CoPastores from '../../assets/img/history/mision-copastores.png';

const History = () => {
  return (
    <div className={classes.History}>
      <img className={classes.Banner} src={ElimBanner} alt="Mision Elim" />
      <div className={classes.Intro}>
        <div className="container">
          <Row>
            <div className={classes.Section}>
              <Col xs={24} md={10} className="hidden-sm-min-up">
                <img
                  className={`${classes.Pastor} img-responsive ${classes.MobileImg}`}
                  src={Pastor}
                  alt="Nuestro Pastor"
                />
              </Col>

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
              <Col xs={24} md={10} className="hidden-sm-min-down">
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
                  alt="Nuestro Pastores"
                />
                <figcaption>Ismael Paz y Marina de Paz</figcaption>
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
      <div className={classes.ContentBanner}>
        <div className={classes.BannerImg} />
        <h3 className={classes.ContentBannerTitle}>
          Una Misión exclusivamente{' '}
          <span className="display-block">al servicio de Dios.</span>
        </h3>
      </div>
      <div className={classes.PastElim}>
        <div className="container">
          <Row>
            <Col xs={24} md={14}>
              <h3 className={classes.Title}>Huellas del Pasado</h3>
              <p>
                Misión Cristiana Elim Honduras, surge básicamente de la
                necesidad de buscar a Dios en oración en el año 1974. Un grupo
                de hermanos se reunía a buscar de Dios y como consecuencia de
                esa búsqueda el grupo creció. Se comenzó a predicar y el Señor
                continuó añadiendo de él y visitando con su presencia en cada
                reunión. Debido al crecimiento se vio la necesidad de buscar a
                alguien que se hiciera cargo del grupo, que ya eran
                aproximadamente unos treinta hermanos; desde ese momento fue
                reconocido por este grupo como su Pastor y consejero espiritual
                el hermano Rafael Ismael Paz.
              </p>

              <p>
                Para el año 1978 el hermano Ismael Paz recibe una confirmación
                sobrenatural acerca de su llamado a servir a tiempo completo al
                salir de su trabajo secular para dedicarse al servicio de la
                obra.
              </p>

              <p>
                En 1980 se establece una relación muy especial con el Dr.
                Otoniel Ríos Paredes quien llega a Honduras y Dios afirma una
                vez más a través de una profecía el llamamiento del hermano
                Ismael Paz y lo unge como Pastor General de Misión Cristiana
                Elim en Honduras.
              </p>

              <p>
                La Iglesia era visitada por personas que buscaban sanidad,
                liberación, ser rescatados de sus vicios, así como una respuesta
                para los problemas que abatían sus almas, a quienes les fue
                presentado el Evangelio de Cristo; sin imaginarse que algunos de
                ellos llegarían a ser Pastores fundadores de otras iglesias de
                Misión Cristiana Elim. Tan impactante era lo que sucedía que
                otros líderes evangélicos también visitaban, inquietos por ser
                parte de este avivamiento.
              </p>

              <p>
                A partir de ese momento empezaron a surgir congregaciones en
                todo el territorio nacional con el surgimiento de otros Pastores
                que han mostrado un llamado evidente de Dios.
              </p>

              <p>
                El crecimiento lo ha dado Dios, no ha sido un logro individual,
                es el resultado de la armoniosa interrelación de siervos
                escogidos por Dios, uniendo así fortalezas, talentos y virtudes
                que conforman; más que un equipo un cuerpo ministerial que
                comparte la misma visión, persigue la misma meta y se apoya
                entre sí para llegar a tocar las vidas y corazones que tanto
                necesitan de Dios.
              </p>
              <p>
                Así como el Apóstol Pablo recomendaba a los Filipenses hemos
                procurado a través de los tiempos “estar firmes y muy unidos,
                luchando todos juntos por la fe del evangelio.” Compartir esa
                maravillosa visión y ser fructíferos, nos llena, porque hacemos
                las cosas para El.
              </p>

              <p>
                Misión Cristiana Elim Honduras
                <span className="display-block">
                  Una Misión exclusivamente al servicio de Dios.
                </span>
              </p>
            </Col>
            <Col xs={24} md={10}>
              <img
                className={`${classes.Pastores} img-responsive`}
                src={Pastores}
                alt="Nuestro Pastores"
              />{' '}
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.MemberBanner}>
        <div className="container">
          <Row>
            <Col xs={24} md={10} lg={7}>
              <img
                className={`${classes.MemberBannerImg} img-responsive`}
                src={CoPastores}
                alt="Pastor Ismael Paz"
              />
            </Col>
            <Col xs={24} md={14} lg={17}>
              <h3 className={classes.MemberBannerTitle}>Junta Directiva</h3>
              <p className={classes.MemberBannerContent}>
                La Junta Directiva de Misión Cristiana Elim esta conformada en
                su mayoría por pastores y presbíteros de la Misión, trabaja en
                varias líneas principales como ser el seguimiento al
                cumplimiento de las normas tanto de la Misión como de los Entes
                Gubernamentales, a fin de que la Misión se mantenga ordenada,
                organizada y estable, también se trabaja en la asistencia
                administrativa a las iglesias, consolidación contable, contando
                además con la asesoría legal del abogado Carlos Ortega.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.Believe}>
        <div className={classes.BelieveBanner} />
        <div className="container"></div>
      </div>
    </div>
  );
};

export default History;
