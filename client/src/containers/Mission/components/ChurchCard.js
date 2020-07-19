import React from 'react';
import './ChurchCard.scss';
import styles from '../Churches.module.scss';
import { Card, Col, Button, Avatar } from 'antd';
import logo from '../../../assets/img/home/logo-elim-white.png';
import { cdnPath } from '../../../constants';

const headStyles = {
  color: '#040926',
  borderRadius: '.5rem',
  lineHeight: '4rem',
};

export default function ChurchCard(props) {
  const { shortName, address, pastor, id, imageLink } = props.churchData;
  const image = pastor.imageLink
    ? `${cdnPath}${pastor.imageLink}`
    : `${cdnPath}/v2/images/home/logo-elim-blue-single.png`;
  return (
    <Col xs={24} sm={12} xl={8}>
      <Card
        title={shortName}
        headStyle={headStyles}
        bordered
        className={`${styles.ChurchCard} church-card`}
      >
        <div className={styles.ChurchCardContent}>
          <Avatar size={64} src={image} />
          <strong>Pastor:</strong>

          <p>{pastor && `${pastor.name} ${pastor.lastName}`}</p>

          {/* <span className="display-block">{address?.location}</span> */}
        </div>

        <Button
          className={styles.seeMore}
          onClick={() => props.handleChurchModal(true, id)}
          type="primary"
          size={'default'}
        >
          Información
        </Button>
      </Card>
    </Col>
  );
}
