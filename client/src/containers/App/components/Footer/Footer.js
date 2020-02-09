import React from 'react';
import { Row, Col } from 'antd';

import ListItems from '../../../../components/UI/ListItems/ListItems';
import footerData from './footerData';
import classes from './Footer.module.scss';

console.log('footerData', footerData);

const Footer = () => {
  return (
    <div>
      <h2 className="txt-center">Mision Cristiana Elim</h2>

      <ListItems
        className={classes.FooterSpecialList}
        data={footerData?.specialLinks}
      />

      <Row>
        {footerData?.sections?.map(item => (
          <Col key={`list-${item.title}`} xs={24} md={12} lg={6}>
            <ListItems
              className={classes.FooterList}
              title={item.title}
              data={item.items}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;
