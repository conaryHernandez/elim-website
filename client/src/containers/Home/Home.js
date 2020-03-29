import React from "react";
import { photos } from "./main-slides";
import { schedules } from "./schedules";
import Slider from "../../components/Slider/Slider";
import { Row, Col } from "antd";
import classes from "./Home.module.scss";
import pastor from "../../assets/img/home/dr-rafael-ismael.png";
import ScheduleItem from "./ScheduleItem";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const settings = {
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  showIndicators: false,
  legendClassName: classes.homeLegend
};

const Home = () => {
  const [form] = Form.useForm();
  const onSubmitPrayer = values => {
    console.log("Success:", values);
  };

  const onSubmitPrayerFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const generateSchedulesItemList = schedulesList => {
    return schedulesList.map((schedule, index) => (
      <ScheduleItem key={index} scheduleData={schedule} />
    ));
  };

  return (
    <div className={classes.Home}>
      <Slider photos={photos.map(el => el)} settings={settings} />
      <div className="container">
        <div className={classes.pastorMessage}>
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={24} md={10} lg={8} className="txt-center">
              <img
                className={classes.pastorAvatar}
                src={pastor}
                alt="Pastor Ismael Paz"
              />
            </Col>
            <Col xs={24} md={14} lg={16}>
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
          <h2>Queremos orar por ti!</h2>
          <strong>La oración eficaz del justo puede mucho</strong>
        </div>

        <Form name="basic" form={form} onSubmit={onSubmitPrayer}>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nombre!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="País"
            name="country"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu país!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name={["petición", "peticion"]} label="Petición">
            <Input.TextArea />
          </Form.Item>

          <Form.Item className="txt-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Home;
