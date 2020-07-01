import React, { useEffect } from 'react';
import styles from './Worship.module.scss';
import { cdnPath } from '../../constants';
import { Row, Col } from 'antd';

export default function Worship() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.Worship}>
      <div className="mainBanner">
        <img
          src={`${cdnPath}/v2/images/central/worship/grupo-alabanza-bg.jpg`}
          alt="Mission Banner"
        />
      </div>
      <div className="container">
        <div className={styles.intro}>
          <h1 className="section-title">Glorificando a Dios</h1>
          <span>a través de la música</span>

          <p>
            Desde los inicios de Misión Cristiana Elim en Honduras, Dios ha
            provisto de adoradores que se han integrado a las filas de este
            mover glorioso del Espíritu Santo a través de la alabanza y la
            adoración.
          </p>

          <p>
            ¡Dios ha sido bueno y en gran manera! Hemos visto nacer, crecer y
            consolidarse muchos siervos y siervas de Dios, actualmente
            aproximadamente 40 integrantes que al día de hoy pertenecen al grupo
            de alabanza y otros que han salido del país pero continúan sirviendo
            al Dios Todopoderoso con esa semilla implantada en sus corazones de
            saber porqué y para quién hacemos las cosas.
          </p>
        </div>
      </div>
      <div className={styles.productions}>
        <div className="container">
          <Row align="middle" justify="center">
            <Col xs={24}>
              <strong className={styles.availableCD}>Ya disponibles!</strong>
            </Col>

            <Col xs={24} sm={6} lg={{ span: 6, offset: 6 }}>
              <div className={styles.diskItem}>
                <img
                  src={`${cdnPath}/v2/images/central/worship/frutos-cd.jpg`}
                  alt="Frutos CD"
                />
              </div>
            </Col>

            <Col xs={24} sm={11} lg={{ span: 11, offset: 1 }}>
              <div className={styles.diskItem}>
                <img
                  src={`${cdnPath}/v2/images/central/worship/venid-aclamemos-cd.png`}
                  alt="Frutos CD"
                />
              </div>
            </Col>

            <div className={styles.platformsWrapper}>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/channel/UC7Ukk_VOwRJEvyNzlu4ckCQ"
              >
                <img
                  className={styles.platformLogo}
                  src={`${cdnPath}/v2/images/central/worship/youtube-white.png`}
                  alt="Youtube Logo"
                />
              </a>

              <a
                target="_blank"
                rel="noopener"
                href="https://open.spotify.com/artist/52eZu145B7h27z3jFHifgk?si=aW6n0AiNT-ugQmn7ExCzxg"
              >
                <img
                  className={styles.platformLogo}
                  src={`${cdnPath}/v2/images/central/worship/spotify-white.png`}
                  alt="Spotify"
                />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://music.amazon.com/artists/B087V87KVM?tab=CATALOG"
              >
                <img
                  className={styles.platformLogo}
                  src={`${cdnPath}/v2/images/central/worship/amazon.png`}
                  alt="Amazon"
                />
              </a>
            </div>
          </Row>
        </div>
      </div>
      <div className={`${styles.gloryToHim} section-gray`}>
        <div className="container">
          <h2 className="section-title">Dios ha sido Fiel</h2>
          <p>
            Actualmente, podemos decir con toda certeza que Dios ha estado, está
            y estará con nosotros, son muchos los grupos de alabanza que Dios ha
            levantado en las diferentes congregaciones de Misión Cristiana Elim
            en Honduras, y es un regocijo cada vez que podemos compartir juntos
            este hermoso llamado de Dios para servir en su obra, guiando un
            pueblo sediento y anhelante de experiencias sobrenaturales con Dios,
            que lleven más que música un deseo inminente de ser ellos mismos
            ofrendas y sacrificios de alabanza para el único que merece toda
            honra y toda Gloria, el Rey de reyes y Señor de señores.
          </p>
        </div>
      </div>

      <div className={styles.gallery}>
        <Row>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-guitarrista.jpg`}
              alt="Elim central guitarrista"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-baterista.jpg`}
              alt="Elim central baterista"
            />
          </Col>

          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-director-marvin.jpg`}
              alt="Elim central director marvin"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-director-irma.jpg`}
              alt="Alabanza Elim Central Irma"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-voces.jpg`}
              alt="Alabanza"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-grupo-alabanza.jpg`}
              alt="Alabanza"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-vientos.jpg`}
              alt="Elim central vientos"
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <img
              src={`${cdnPath}/v2/images/central/worship/elim-central-voces-2.jpg`}
              alt="Elim central Voces"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
