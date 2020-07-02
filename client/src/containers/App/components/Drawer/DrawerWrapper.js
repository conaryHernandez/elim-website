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
          <HomeOutlined />
          <Link to="/">Inicio</Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <VideoCameraOutlined />
          <Link to="/elim-live">En vivo</Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <UsergroupAddOutlined />
          <Link to="/mision-elim-honduras">Misión Cristiana Elim</Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <TeamOutlined />
          <Link to="/elim-central">Elim Central</Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <YoutubeOutlined />
          <Link to="/alabanza">Alabanza</Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <QqOutlined />
          <Link to="/escuela-biblica">Elim Kids</Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <CalendarOutlined />
          <Link to="/calendario">Calendario</Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <BookOutlined />
          <Link to="/calendario">Prédicas</Link>
        </div>

        <div className="drawer-item" onClick={closeDrawer}>
          <HeartOutlined />
          <Link to="/corazones-generosos">Corazones Generosos</Link>
        </div>
        <div className="drawer-item" onClick={closeDrawer}>
          <ContactsOutlined />
          <Link to="/contact">Contacto</Link>
        </div>
      </Drawer>
    </div>
  );
}

DrawerWrapper.propTypes = {
  onClose: PropTypes.func,
  isDrawerVisible: PropTypes.bool,
};
