import React, { useEffect } from 'react';
import styles from './Live.module.scss';
import { cdnPath } from '../../constants';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

export default function Live() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.liveVw}>
      <div className={styles.mainBanner}>
        <div className={styles.mainBannerOverlay} />
        <img
          src={`${cdnPath}/v2/images/home/main-slider/alabanza-2020.jpg`}
          alt="Live Banner"
        />
      </div>
      <div className="container">
        <div className={styles.iframeWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GkEZd5OP6O8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.recentMessages}>
          <h1>Mensajes recientes</h1>
          <Row gutter={18} justify="center">
            <Col xs={24} sm={12} lg={8}>
              <Card
                className={styles.messageCard}
                cover={
                  <img
                    alt="example"
                    src="https://elimhn.org/images/recursos/ensenanzas_predicas/Giovanny-Gambarelly.png"
                  />
                }
              >
                <Meta
                  title="Libres de las ataduras"
                  description="Hay situaciones en la vida que esclavizan, el problema que enfrentamos tiene que ver con ignorar sus raíces o acostumbrarnos a vivir con ellas. "
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                className={styles.messageCard}
                cover={
                  <img
                    alt="example"
                    src="https://elimhn.org/images/recursos/ensenanzas_predicas/Josue-Barrientos.png"
                  />
                }
              >
                <Meta
                  title="Las cosas que debe procurar el creyente"
                  description="La vida del creyente no es ajena a las realidades terrenales, muchas de las cosas con las que a diario nos relacionamos se vuelven ataduras o tropiezos en nuestras vidas."
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                className={styles.messageCard}
                cover={
                  <img
                    alt="example"
                    src="https://elimhn.org/images/recursos/ensenanzas_predicas/roger-diaz.png"
                  />
                }
              >
                <Meta
                  title="No menosprecies tu conciencia"
                  description="El objetivo de la sangre de Cristo es llegar hasta la conciencia y limpiarla hasta que pueda sentir que toda mancha es removida. «…purificados los corazones de mala conciencia» (Heb.10:22)"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
