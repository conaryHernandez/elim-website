import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  CalendarOutlined,
  BookOutlined,
  HeartOutlined,
  ContactsOutlined
} from "@ant-design/icons";

export default function DrawerWrapper(props) {
  return (
    <div id="drawer" className="ib">
      <Drawer
        title="Misión Cristiana Elim"
        placement="left"
        closable={false}
        onClose={props.onClose}
        visible={props.isDrawerVisible}
      >
        <div className="drawer-item">
          <HomeOutlined />
          <Link to="/">Home</Link>
        </div>
        <div className="drawer-item">
          <UsergroupAddOutlined />
          <Link to="/mision-elim">Misión Cristiana Elim</Link>
        </div>
        <div className="drawer-item">
          <TeamOutlined />
          <Link to="/elim-central">Elim Central</Link>
        </div>

        <div className="drawer-item">
          <CalendarOutlined />
          <Link to="/calendario">Calendario</Link>
        </div>

        <div className="drawer-item">
          <BookOutlined />
          <Link to="/calendario">Prédicas</Link>
        </div>

        <div className="drawer-item">
          <HeartOutlined />
          <Link to="/corazones-generosos">Corazones Generosos</Link>
        </div>
        <div className="drawer-item">
          <ContactsOutlined />
          <Link to="/contact">Contacto</Link>
        </div>
      </Drawer>
    </div>
  );
}

DrawerWrapper.propTypes = {
  onClose: PropTypes.func,
  isDrawerVisible: PropTypes.bool
};
