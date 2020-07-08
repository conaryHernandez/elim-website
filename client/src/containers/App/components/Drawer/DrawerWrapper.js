import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import {
  HomeOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  CalendarOutlined,
  BookOutlined,
  HeartOutlined,
  ContactsOutlined,
  VideoCameraOutlined,
  YoutubeOutlined,
  QqOutlined,
  LikeOutlined,
} from '@ant-design/icons';

import elimWhiteLogo from '../../../../assets/img/home/logo-elim-white.png';

export default function DrawerWrapper(props) {
  const closeDrawer = () => {
    props.setIsDrawerVisible(false);
  };

  return (
    <div id="drawer" className="ib">
      <Drawer
        title={<img src={elimWhiteLogo} />}
        placement="left"
        closable={true}
        keyboard
        onClose={props.onClose}
        visible={props.isDrawerVisible}
      >
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/">
            <HomeOutlined />
            Inicio
          </Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/elim-live">
            <VideoCameraOutlined />
            En vivo
          </Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/mision-elim-honduras">
            <UsergroupAddOutlined />
            Misión Cristiana Elim
          </Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/elim-central">
            <TeamOutlined />
            Elim Central
          </Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/alabanza">
            <YoutubeOutlined />
            Alabanza
          </Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/escuela-biblica">
            <QqOutlined />
            Escuela Biblica
          </Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/jovenes-elim">
            <LikeOutlined />
            Jóvenes Elim
          </Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/calendario">
            <CalendarOutlined />
            Calendario
          </Link>
        </div>
        {/*
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/calendario">
            <BookOutlined />
            Prédicas
          </Link>
        </div> */}

        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/corazones-generosos">
            <HeartOutlined />
            Corazones Generosos
          </Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <Link to="/contact">
            <ContactsOutlined />
            Contacto
          </Link>
        </div>
      </Drawer>
    </div>
  );
}

DrawerWrapper.propTypes = {
  onClose: PropTypes.func,
  isDrawerVisible: PropTypes.bool,
};
