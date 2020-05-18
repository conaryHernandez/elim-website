import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Affix } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Drawer from '../Drawer/DrawerWrapper';
import logo from '../../../../assets/img/home/elim-logo-blue.png';

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

  const handleClick = (e) => {
    setCurrentOption(e.key);
  };
  return (
    <div id="header">
      <MenuOutlined className={`hidden-xlarge-up ib`} onClick={showDrawer} />
      <Drawer isDrawerVisible={isDrawerVisible} onClose={onClose} />
      <Link to="/">
        <img src={logo} className="header-logo ib" alt="Elim Logo" />
      </Link>
      <Affix offsetTop={0}>
        <Menu
          onClick={handleClick}
          selectedKeys={[currentOption]}
          mode="horizontal"
          className="hidden-xlarge-down"
        >
          <Menu.Item key="alipay">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="live">
            <Link to="/elim-live">En vivo</Link>
          </Menu.Item>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Link to="/mision-elim-honduras">Misión Cristiana Elim</Link>
              </span>
            }
          >
            <Menu.Item key="huellas">Huellas del pasado</Menu.Item>
            <Menu.Item key="churches">
              <Link to="/iglesias">Iglesias</Link>
            </Menu.Item>
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
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Link to="/calendario">Calendario</Link>
              </span>
            }
          >
            <Menu.Item key="events">
              <Link to="/eventos">Eventos</Link>
            </Menu.Item>
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
            <Link to="/users">Prédicas</Link>
          </Menu.Item>
        </Menu>
      </Affix>
    </div>
  );
}
