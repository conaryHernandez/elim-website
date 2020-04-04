import React from "react";
import styles from "../Contact.module.scss";
import { Card, Col, Button } from "antd";

const headStyles = {
  backgroundImage: "linear-gradient(45deg, #42002a, #941834)",
  color: "#fff",
  borderRadius: "1rem"
};

export default function ChurchCard(props) {
  const { shortName, address, pastor } = props.churchData;
  return (
    <Col xs={24} sm={12} lg={8} xl={6}>
      <Card
        title={shortName}
        headStyle={headStyles}
        bordered={false}
        className={styles.ChurchCard}
      >
        <div className={styles.ChurchCardContent}>
          <strong>Dirección</strong>
          <p>{address?.location}</p>
          <strong>Pastor:</strong>
          <p>{pastor}</p>
        </div>

        <Button className={styles.seeMore} type="primary" size={"default"}>
          Detalles
        </Button>
      </Card>
    </Col>
  );
}
