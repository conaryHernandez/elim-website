import React, { useState } from 'react';
import { Card, Col, Row, Select, Tooltip } from 'antd';
import { PhoneOutlined, MailFilled, HomeFilled } from '@ant-design/icons';
import ChurchCard from './components/ChurchCard';
import logo from '../../assets/img/home/elim-logo-2.png';
import styles from './Contact.module.scss';
import { churches } from './churchesData';
import { departaments } from './departamentsData';
import { cdnPath } from '../../constants';

const Contact = () => {
  const { Option } = Select;
  const [churchesData, setChurches] = useState(churches);
  const [filteredChurches, setFilteredChurches] = useState(churchesData);

  const onDepartamentChange = (value) => {
    if (value === 'all') {
      setFilteredChurches(churchesData);
    } else {
      const filtered = churchesData.filter((church) => {
        return church.address.deptoCode === value;
      });
      setFilteredChurches(filtered);
    }
  };

  const onBlur = () => {
    console.log('blur');
  };

  const onFocus = () => {
    console.log('focus');
  };

  const onSearch = (val) => {
    console.log('search:', val);
  };

  const generateChurchesCardList = (data) => {
    return data.map((church, index) => (
      <ChurchCard key={index} churchData={church} />
    ));
  };
  const generateDepartmentsList = (data) => {
    return data.map((depto) => <Option key={depto.code}>{depto.name}</Option>);
  };

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
        <div className={styles.locationsWrapper}>
          <img src={logo} className={styles.logo} alt="Logo" />
          <h2>Iglesias en el país</h2>
          <Tooltip
            placement="rightBottom"
            title={'Consulta iglesias por departamento'}
          >
            <Select
              showSearch
              style={{ width: 320, marginBottom: '2rem', color: '#000' }}
              placeholder="Elige un departamento"
              optionFilterProp="children"
              onChange={onDepartamentChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="all">Todas</Option>
              {generateDepartmentsList(departaments)}
            </Select>
          </Tooltip>
        </div>
        <div className={styles.churchesWrapper}>
          <Row gutter={18} justify="center">
            {generateChurchesCardList(filteredChurches)}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
