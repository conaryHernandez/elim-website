import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';

import ListItems from '../../../../components/UI/ListItems/ListItems';
import SocialBar from '../../../../components/SocialBar/SocialBar';
import classes from './Footer.module.scss';

const Footer = () => {
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await axios.get('data/footerData.json');

        setFooterData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getFooterData();
  }, []);

  return (
    <>
      <div className={classes.Footer}>
        <div className="container">
          <Row>
            <Col xs={24}>
              <SocialBar
                className={classes.SocialBar}
                networks={footerData.socialNetworks}
              />
            </Col>
          </Row>

          <h2 className={`${classes.FooterTitle} txt-center`}>
            Misión Cristiana Elim
            <span className="display-block">
              <i className="icon-location" />
            </span>
          </h2>

          <div className={classes.Location}>
            <span className={`${classes.Location} txt-center display-block`}>
              {footerData?.location?.address}
            </span>
          </div>

          <ListItems
            className={classes.FooterSpecialList}
            data={footerData?.specialLinks}
          />

          <Row>
            {footerData?.sections?.map((item) => (
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
      </div>
      <div className={classes.FooterLegend}>
        <p className="txt-center">
          © Copyright 2017 — {new Date().getFullYear()} Misión Cristiana Elim.
          Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;
