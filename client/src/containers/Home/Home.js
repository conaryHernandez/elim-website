import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { schedules } from './schedules';
import Slider from '../../components/Slider/Slider';
import classes from './Home.module.scss';
import ScheduleItem from './ScheduleItem';
import { Row, Col, Form, Input, Button, notification, Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { cdnPath, elimAPI, strapiURL } from '../../constants';
import { pastorMessageOne, pastorMessageTwo } from './data';
import parse from 'html-react-parser';
import ReactGA from 'react-ga';
import axios from 'axios';

const settings = {
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  showStatus: false,
  showIndicators: false,
  legendClassName: classes.homeLegend,
  className: classes.mainSlider,
};

const messageOne = parse(pastorMessageOne);
const messageTwo = parse(pastorMessageTwo);

const Home = () => {
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [pageData, setPageData] = useState({});
  const { slide } = pageData || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    getPageData();
  }, []);
  const [form] = Form.useForm();

  const onSubmitPrayer = (values) => {
    const options = {
      url: `${elimAPI}/emails`,
      method: 'POST',
      data: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    };
    axios(options)
      .then((response) => {
        form.resetFields();
        openNotification('bottomRight');
      })
      .catch((error) => console.error(error));
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
  const trackButtonEvents = (action = '') => {
    ReactGA.event({
      category: 'Button',
      action: action,
    });
  };
  const getPageData = async () => {
    try {
      const response = await axios.get(`${strapiURL}/elim-home`);
      setPageData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.Home}>
      {slide && <Slider photos={slide.map((el) => el)} settings={settings} />}

      <div className="container">
        <div className={classes.pastorMessage}>
          <Row type="flex" justify="space-around" align="middle">
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

              <button
                onClick={() => {
                  trackButtonEvents(
                    'Presionó leer mas mensaje del pastor en inicio'
                  );
                  setIsMessageModalVisible(true);
                }}
                className={`${classes.readMore} regular-btn uppercase txt-center`}
              >
                Leer más
              </button>
            </Col>
          </Row>
          <Modal
            title="Palabras de Vida"
            visible={isMessageModalVisible}
            footer={null}
            onCancel={() => setIsMessageModalVisible(false)}
          >
            <Row justify={'center'} align={'top'} gutter={24}>
              <Col xs={24} sm={12}>
                {messageOne}
              </Col>
              <Col xs={24} sm={12}>
                {messageTwo}
              </Col>
            </Row>
          </Modal>
        </div>
      </div>
      <div
        className={`${classes.exploreWrapper} ${classes.sectionPaddings} section-gray`}
      >
        <div className="container">
          <span className={classes.title}>Elim Honduras</span>
          <Row justify={'center'} align={'middle'} gutter={24}>
            <Col xs={24} sm={8} xl={7}>
              <div className={classes.exploreCard}>
                <img
                  className="img-responsive"
                  src={`${cdnPath}/v2/images/home/predicas.jpg`}
                  alt="Prédicas"
                />
                <div className={classes.content}>
                  <h3>Prédicas</h3>
                  <p>
                    Múltiples prédicas de diversos pastores de la misión, para
                    acompañarte en tu estudio continuo de la palabra.
                  </p>
                  <Link
                    to="/elim-live"
                    className={`${classes.exploreLink} uppercase txt-center`}
                  >
                    Ver libreria
                  </Link>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={8} xl={7}>
              <div className={classes.exploreCard}>
                <img
                  className="img-responsive"
                  src={`${cdnPath}/v2/images/home/alabanza.jpeg`}
                  alt="Alabanza"
                />
                <div className={classes.content}>
                  <h3>Alabanza</h3>
                  <p>
                    Inspirados por la palabra, nuestro equipo de alabanza ha
                    compuesto hermosos cantos para glorificar a Dios.
                  </p>
                  <Link
                    onClick={() =>
                      trackButtonEvents(
                        'Presionó el botón de alabanza en Inicio'
                      )
                    }
                    to="/alabanza"
                    className={`${classes.exploreLink} uppercase txt-center`}
                  >
                    Elim Central
                  </Link>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={8} xl={7}>
              <div className={classes.exploreCard}>
                <img
                  className="img-responsive"
                  src={`${cdnPath}/v2/images/home/generosos.png`}
                  alt="generosidad"
                />
                <div className={classes.content}>
                  <h3>Generosidad</h3>
                  <p>
                    Cada uno dé como propuso en su corazón, no con tristeza ni
                    por obligación porque Dios ama al dador alegre.
                  </p>
                  <Link
                    onClick={() =>
                      trackButtonEvents(
                        'Presionó el botón de Generosidad en Inicio'
                      )
                    }
                    to="/corazones-generosos"
                    className={`${classes.exploreLink} uppercase txt-center`}
                  >
                    Información
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`${classes.channels} ${classes.sectionPaddings}`}>
        <div className="container">
          <span className={classes.title}>Sigue nuestras transmisiones</span>
          <p>
            Acompáñanos en todos nuestros cultos en línea donde a la luz de la
            palabra seremos edificados por el Dios Todopoderoso. También
            compartiremos un tiempo de alabanza justo después de dar los
            anuncios por medio de la antesala.
          </p>
          <Link
            onClick={() =>
              trackButtonEvents('Presionó el botón de Elim live en inicio')
            }
            to="/elim-live"
            className={`${classes.goLiveBtn} regular-btn uppercase txt-center`}
          >
            Elim Live
          </Link>
        </div>
      </div>

      <div className={`${classes.servicesSchedule} ${classes.sectionPaddings}`}>
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

      <div className={`${classes.oracionWrapper} `}>
        <div className="container">
          <div className={classes.titleWrapper}>
            <h3>! Queremos orar por ti !</h3>
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
              name={'peticion'}
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa tu petición!',
                },
              ]}
            >
              <Input.TextArea placeholder="Petición" allowClear autoSize />
            </Form.Item>

            <Form.Item className="txt-center">
              <Button
                type="primary"
                htmlType="submit"
                className={`${classes.submitPrayerBtn} regular-btn`}
              >
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
