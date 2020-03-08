import React from "react";
import PropTypes from "prop-types";
import { Col } from "antd";
import classes from "./Home.module.scss";

export default function ScheduleItem(props) {
  const { scheduleData } = props;
  return (
    <Col xs={24} sm={12} className={classes.scheduleItem}>
      <strong
        className={classes.scheduleTime}
      >{`${scheduleData.day} ${scheduleData.hour}`}</strong>
      <span className={classes.serviceName}>{scheduleData.service}</span>
    </Col>
  );
}

ScheduleItem.propTypes = {
  scheduleData: PropTypes.object
};
