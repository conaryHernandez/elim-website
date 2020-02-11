import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import Drawer from "../Drawer/DrawerWrapper";
import logo from "../../../../assets/img/home/elim-logo.png";

const { SubMenu } = Menu;

export default function Header() {
  const [currentOption, setCurrentOption] = useState([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  const handleClick = e => {
    setCurrentOption(e.key);
  };
  return (
    <div id="header">
      <Icon type="menu" className={`hidden-large-up ib`} onClick={showDrawer} />
      <Drawer isDrawerVisible={isDrawerVisible} onClose={onClose} />
      <img src={logo} className="header-logo ib" alt="Elim Logo" />
      <Menu
        onClick={handleClick}
        selectedKeys={[currentOption]}
        mode="horizontal"
        className="hidden-large-down"
      >
        <Menu.Item key="alipay">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Link to="/mision-elim">Misión Cristiana Elim</Link>
            </span>
          }
        >
          <Menu.Item key="huellas">Huellas del pasado</Menu.Item>
          <Menu.Item key="beliefs">En que creemos</Menu.Item>
          <Menu.Item key="calendar">Calendario</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Link to="/elim-central">Elim Central</Link>
            </span>
          }
        >
          <Menu.Item key="alabanza">Alabanza</Menu.Item>
          <Menu.Item key="escuela">Escuela Bíblica</Menu.Item>
          <Menu.Item key="damas">Damas</Menu.Item>
          <Menu.Item key="youth">Jóvenes</Menu.Item>
          <Menu.Item key="servidores">Ujieres</Menu.Item>
          <Menu.Item key="educacion">Educación Básica Ministerio</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Link to="/corazones-generosos">Corazones generosos</Link>
            </span>
          }
        >
          <Menu.Item key="donacion-mce">Donación Misión Elim</Menu.Item>
          <Menu.Item key="donacion-central">Donación Elim Central</Menu.Item>
        </SubMenu>

        <Menu.Item key="contact">
          <Link to="/contact">Contacto</Link>
        </Menu.Item>

        <Menu.Item key="users">
          <Link to="/users">Usuarios Elim</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
