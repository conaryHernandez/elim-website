import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Calendar, Badge } from 'antd';
import styles from './Calendar.module.scss';
import axios from 'axios';
import { strapiURL } from '../../constants';
// import { defaultBadgeColor } from '../constants';

export default function CalendarWrapper(props) {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${strapiURL}/events`)
      .then((response) => setEventsData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const setCurrentEvents = (eventsData, currentDate) => {
    return eventsData.filter((event) => {
      return event.date === currentDate.format('YYYY-MM-DD');
    });
  };
  const sortCurrentEvents = (filteredEventList) => {
    return filteredEventList.sort((a, b) => {
      return a.eventTimeInSeconds - b.eventTimeInSeconds;
    });
  };
  console.log(eventsData);

  const dateCellRender = (value) => {
    const filteredEventList = setCurrentEvents(eventsData, value);
    // const listData = sortCurrentEvents(filteredEventList);
    return (
      <ul className="events">
        {filteredEventList.map((item, index) => (
          <li key={index}>
            <Badge color={item.color || '#2db7f5'} text={item.name} />
          </li>
        ))}
      </ul>
    );
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={props.onDaySelection}
      />
    </div>
  );
}
