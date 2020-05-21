import React from 'react';
import './ChurchCard.scss';
import styles from '../Churches.module.scss';
import { Card, Col, Button } from 'antd';

const headStyles = {
  color: '#040926',
  borderRadius: '.5rem',
  lineHeight: '4rem',
};

export default function ChurchCard(props) {
  const { shortName, address, pastor } = props.churchData;
  return (
    <Col xs={24} sm={12} lg={8} xl={6}>
      <Card
        title={shortName}
        headStyle={headStyles}
        bordered
        className={`${styles.ChurchCard} church-card`}
      >
        <div className={styles.ChurchCardContent}>
          <strong>Dirección</strong>
          <span className="display-block">{address?.location}</span>
          <strong>Pastor:</strong>
          <p>{pastor}</p>
        </div>

        <Button className={styles.seeMore} type="primary" size={'default'}>
          Detalles
        </Button>
      </Card>
    </Col>
  );
}
