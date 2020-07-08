import React, { useState } from 'react';
import CalendarWrapper from './CalendarWrapper';
// import ReminderPanel from '../components/ReminderPanel';
import { Modal, Button } from 'antd';
import styles from './Calendar.module.scss';

export default function Dashboard() {
  const [isReminderModalVisible, setIsReminderModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [isSummaryShowing, setIsSummaryShowing] = useState(false);

  const onDaySelection = (value) => {
    setIsSummaryShowing(true);
    setSelectedDay(value);
    setIsReminderModalVisible(true);
  };
  const onCreateReminderClick = () => {
    setIsSummaryShowing(false);
    setIsReminderModalVisible(true);
  };

  return (
    <div className={styles.calendar}>
      <div className="container">
        <h1>Calendario Ministerial</h1>
        <CalendarWrapper />
        {/* <CalendarWrapper onDaySelection={onDaySelection} /> */}
        <Modal
          title={
            isSummaryShowing
              ? `Reminders for: ${selectedDay.format('MMMM Do YYYY')}`
              : 'New Reminder'
          }
          visible={isReminderModalVisible}
          onCancel={() => setIsReminderModalVisible(false)}
          footer={null}
        >
          {/* <ReminderPanel selectedDay={selectedDay} /> */}
        </Modal>
      </div>
    </div>
  );
}
