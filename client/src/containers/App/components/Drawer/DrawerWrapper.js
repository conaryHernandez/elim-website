import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Drawer, Icon } from "antd";

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
          <Icon type="home" />
          <Link to="/">Home</Link>
        </div>
        <div className="drawer-item">
          <Icon type="usergroup-add" />
          <Link to="/mision-elim">Misión Cristiana Elim</Link>
        </div>
        <div className="drawer-item">
          <Icon type="team" />
          <Link to="/elim-central">Elim Central</Link>
        </div>
        <div className="drawer-item">
          <Icon type="heart" />
          <Link to="/corazones-generosos">Corazones Generosos</Link>
        </div>
        <div className="drawer-item">
          <Icon type="contacts" />
          <Link to="/contact">Contacto</Link>
        </div>
        <div className="drawer-item">
          <Icon type="user" />
          <Link to="/users">Usuarios</Link>
        </div>
      </Drawer>
    </div>
  );
}

DrawerWrapper.propTypes = {
  onClose: PropTypes.func,
  isDrawerVisible: PropTypes.bool
};
