import React from 'react';
import './ChurchCard.scss';
import styles from '../Churches.module.scss';
import { Card, Col, Button, Avatar } from 'antd';

const headStyles = {
  color: '#040926',
  borderRadius: '.5rem',
  lineHeight: '4rem',
};

export default function ChurchCard(props) {
  const { shortName, address, pastor } = props.churchData;
  return (
    <Col xs={24} sm={12} xl={8}>
      <Card
        title={shortName}
        headStyle={headStyles}
        bordered
        className={`${styles.ChurchCard} church-card`}
      >
        <div className={styles.ChurchCardContent}>
          <Avatar
            size={64}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
          />
          <strong>Pastor:</strong>

          <p>{pastor && `${pastor.name} ${pastor.lastName}`}</p>

          {/* <span className="display-block">{address?.location}</span> */}
        </div>

        <Button className={styles.seeMore} type="primary" size={'default'}>
          Información
        </Button>
      </Card>
    </Col>
  );
}
