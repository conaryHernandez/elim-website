import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import Drawer from "./DrawerWrapper";
import logo from "../../assets/img/home/elim-logo.png";

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
      <Icon type="menu" className={`hidden-large-up`} onClick={showDrawer} />
      <Drawer isDrawerVisible={isDrawerVisible} onClose={onClose} />
      <img src={logo} className="header-logo" alt="Elim Logo" />
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
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Link to="/elim-central">Elim Central</Link>
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Link to="/corazones-generosos">Corazones generosos</Link>
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
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
