import React, { useState } from 'react';
import CalendarWrapper from './CalendarWrapper';
// import ReminderPanel from '../components/ReminderPanel';
import { Modal, Button } from 'antd';
import styles from './Calendar.module.scss';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';

export default function Dashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [isSummaryShowing, setIsSummaryShowing] = useState(false);
  const [isPanelDifferent, setIsPanelDifferent] = useState(false);

  const onDaySelection = (value) => {
    setIsSummaryShowing(true);
    setSelectedDay(value);
    setIsModalVisible(true);
  };
  const onCreateReminderClick = () => {
    setIsSummaryShowing(false);
    setIsModalVisible(true);
  };
  const handleModal = (isVisible) => {
    setIsModalVisible(isVisible);
  };

  return (
    <div className={styles.calendar}>
      <div className="container">
        <h1>Calendario Ministerial</h1>
        <ConfigProvider locale={esES}>
          <CalendarWrapper handleModal={handleModal} />
        </ConfigProvider>

        {/* <CalendarWrapper onDaySelection={onDaySelection} /> */}
        <Modal
          title={
            isSummaryShowing
              ? `Evento para el: ${selectedDay.format('MMMM Do YYYY')}`
              : 'New Reminder'
          }
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {/* <ReminderPanel selectedDay={selectedDay} /> */}
        </Modal>
      </div>
    </div>
  );
}
