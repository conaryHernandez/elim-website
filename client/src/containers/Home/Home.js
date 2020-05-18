import React from 'react';
import { Link } from 'react-router-dom';
import { photos } from './main-slides';
import { schedules } from './schedules';
import Slider from '../../components/Slider/Slider';
import classes from './Home.module.scss';
import ScheduleItem from './ScheduleItem';
import { Row, Col, Form, Input, Button, notification } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { cdnPath } from '../../constants';

const settings = {
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: false,
  showIndicators: false,
  legendClassName: classes.homeLegend,
  className: classes.mainSlider,
};

const Home = () => {
  const [form] = Form.useForm();
  const onSubmitPrayer = (values) => {
    console.log('Success:', values);
    openNotification('bottomRight');
  };

  const onSubmitPrayerFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = (placement) => {
    notification.info({
      message: 'Tu petición fue enviada!',
      description: 'Estaremos orando por tu necesidad.',
      icon: <CheckCircleTwoTone />,
      placement,
    });
  };

  const generateSchedulesItemList = (schedulesList) => {
    return schedulesList.map((schedule, index) => (
      <ScheduleItem key={index} scheduleData={schedule} />
    ));
  };

  return (
    <div className={classes.Home}>
      <Slider photos={photos.map((el) => el)} settings={settings} />
      <div className="container">
        <div className={classes.pastorMessage}>
          <Row type="flex" justify="space-around" align="middle">
            {/* <Col xs={24} md={10} lg={8} className="txt-center">
              <img
                className={classes.pastorAvatar}
                src={`${cdnPath}/v2/images/home/dr-rafael-ismael.png`}
                alt="Pastor Ismael Paz"
              />
            </Col> */}
            <Col xs={24} md={16}>
              <h1>Palabras de Vida</h1>
              <p className={classes.introText}>
                El enfoque que cada quien tenga de la vida, puede depender de la
                clase de semilla que haya sembrado o le hayan sembrado.
              </p>

              <p className={classes.introText}>
                Las respuestas postreras después de la siembra, no siempre son
                fáciles de expresar, no hay una sola y simple solución a los
                graves problemas de la vida; o si la hay, ¡yo no lo he
                descubierto todavía! la vida no es fácil y nunca lo ha sido.
              </p>
              <span className={classes.quoteBy}>-Pastor Ismael Paz</span>

              <Link
                to="/"
                className={`${classes.readMore} uppercase txt-center`}
              >
                Leer más
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.servicesSchedule}>
        <h2>Horarios de culto</h2>
        <Row
          type="flex"
          justify="space-around"
          align="middle"
          className="container"
        >
          {generateSchedulesItemList(schedules)}
        </Row>
      </div>
      <div className={`${classes.oracionWrapper} container`}>
        <div className={classes.titleWrapper}>
          <h3>Queremos orar por ti!</h3>
          <strong>La oración eficaz del justo puede mucho</strong>
        </div>

        <Form
          name="basic"
          form={form}
          onFinish={onSubmitPrayer}
          onFinishFailed={onSubmitPrayerFailed}
          className={classes.oracionForm}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu nombre!',
              },
            ]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>

          <Form.Item
            name="country"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu país!',
              },
            ]}
          >
            <Input placeholder="País" />
          </Form.Item>

          <Form.Item
            name={['petición', 'peticion']}
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu petición!',
              },
            ]}
          >
            <Input.TextArea placeholder="petición" />
          </Form.Item>

          <Form.Item className="txt-center">
            <Button
              type="primary"
              htmlType="submit"
              className={classes.submitPrayerBtn}
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Home;
