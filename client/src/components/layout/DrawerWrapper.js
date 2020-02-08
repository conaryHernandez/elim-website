import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Drawer } from "antd";

export default function DrawerWrapper(props) {
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={props.onClose}
        visible={props.isDrawerVisible}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/mision-elim">Misión Cristiana Elim</Link>
        </div>
        <div>
          <Link to="/elim-central">Elim Central</Link>
        </div>
        <div>
          <Link to="/corazones-generosos">Corazones Generosos</Link>
        </div>
        <div>
          <Link to="/contact">Contacto</Link>
        </div>
        <div>
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
