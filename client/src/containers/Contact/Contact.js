import React from "react";
import { Card, Col, Row } from "antd";
import mainBanner from "../../assets/img/contact/banner-contacto.jpg";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div id={styles.Contact}>
      <div className={styles.mainBanner}>
        <div className={styles.mainBannerOverlay} />
        <img src={mainBanner} alt="Contacto Banner" />
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
                <strong>Teléfonos:</strong>
                <ul>
                  <li>+504 2553-2698</li>
                  <li>+504 2553-2713</li>
                  <li>+504 2557-5265</li>
                </ul>
                <strong>Dirección</strong>
                <p>
                  15 y 16 Calle, 2 Ave., N.O., Bo. Guadalupe, San Pedro Sula,
                  Honduras, C.A.
                </p>
                <strong>Correo:</strong>
                <p>info@elimhn.org</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={10}>
              <Card
                title="Misión Cristiana Elim"
                bordered={false}
                className={styles.infoCard}
              >
                <strong>Teléfono</strong>
                <p>+504 2552-1624</p>
                <strong>Correo:</strong>
                <p>info@elimhn.org</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
