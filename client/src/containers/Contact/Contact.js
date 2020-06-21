import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { PhoneOutlined, MailFilled, HomeFilled } from '@ant-design/icons';
import styles from './Contact.module.scss';
import { cdnPath } from '../../constants';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.Contact}>
      <div className={styles.mainBanner}>
        <div className={styles.mainBannerOverlay} />
        <img
          src={`${cdnPath}/v2/images/contact/banner-contacto.jpg`}
          alt="Contacto Banner"
        />
      </div>

      <div className="container">
        <div className={styles.infoCardsWrapper}>
          <Row gutter={18} justify="center">
            <Col xs={24} sm={12} lg={10}>
              <Card
                title="Elim Central"
                bordered={false}
                className={styles.infoCard}
              >
                <strong>
                  <PhoneOutlined />
                  Teléfonos:
                </strong>
                <ul>
                  <li>+504 2553-2698</li>
                  <li>+504 2553-2713</li>
                  <li>+504 2557-5265</li>
                </ul>
                <strong>
                  <HomeFilled />
                  Dirección
                </strong>
                <p>
                  15 y 16 Calle, 2 Ave., N.O., Bo. Guadalupe, San Pedro Sula,
                  Honduras, C.A.
                </p>
                <strong>
                  <MailFilled />
                  Correo:
                </strong>
                <p>info@elimhn.org</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={10}>
              <Card
                title="Misión Cristiana Elim"
                bordered={false}
                className={styles.infoCard}
              >
                <strong>
                  <PhoneOutlined />
                  Teléfono:
                </strong>
                <p>+504 2552-1624</p>
                <strong>
                  <MailFilled />
                  Correo:
                </strong>
                <p>info@elimhn.org</p>
              </Card>
            </Col>
          </Row>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14YYIILQwqJI5CaqkZTmxWNKB6NaG6sRN"
            width="100%"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
