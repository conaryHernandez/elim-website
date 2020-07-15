import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Menu, Affix } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Drawer from '../Drawer/DrawerWrapper';
import SocialBar from '../../../../components/SocialBar/SocialBar';

const { SubMenu } = Menu;

export default function Header() {
  const [currentOption, setCurrentOption] = useState([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await axios.get('data/footerData.json');

        setFooterData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getFooterData();
  }, []);

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
      {/* <Drawer
        isDrawerVisible={isDrawerVisible}
        onClose={onClose}
        setIsDrawerVisible={setIsDrawerVisible}
      /> */}
      <span onClick={() => Router.push('/')}>
        <img
          src="https://elim.nyc3.cdn.digitaloceanspaces.com/v2/images/home/elim-logo-blue.png"
          className="header-logo ib"
          alt="Elim Logo"
        />
      </span>
      <SocialBar
        className="socialBar hidden-large-down"
        networks={footerData.socialNetworks}
      />
      <Affix offsetTop={0}>
        <Menu
          onClick={handleClick}
          selectedKeys={[currentOption]}
          mode="horizontal"
          className="hidden-xlarge-down"
        >
          <Menu.Item key="alipay">
            <a onClick={() => Router.push('/')}>Inicio</a>
          </Menu.Item>

          <Menu.Item key="live">
            <a onClick={() => Router.push('/elim-live')}>En vivo</a>
          </Menu.Item>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <a onClick={() => Router.push('/mision-elim-honduras')}>
                  Misión Cristiana Elim
                </a>
              </span>
            }
          >
            <Menu.Item key="churches">
              <a onClick={() => Router.push('/iglesias')}>Iglesias</a>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <a onClick={() => Router.push('/elim-central')}>Elim Central</a>
              </span>
            }
          >
            <Menu.Item key="alabanza">
              <a onClick={() => Router.push('/alabanza')}>Alabanza</a>
            </Menu.Item>
            <Menu.Item key="escuela">
              <a onClick={() => Router.push('/escuela-biblica')}>
                Escuela Bíblica
              </a>
            </Menu.Item>
            {/* <Menu.Item key="damas">Damas</Menu.Item> */}
            <Menu.Item key="youth">
              <a onClick={() => Router.push('/jovenes-elim')}>Jóvenes</a>
            </Menu.Item>
            {/* <Menu.Item key="servidores">Ujieres</Menu.Item> */}
          </SubMenu>

          {/*          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Link to="/calendario">Calendario</Link>
              </span>
            }
          >
            <Menu.Item key="events">
              <Link to="/eventos">Eventos</Link>
            </Menu.Item>
          </SubMenu> */}
          <Menu.Item key="calendar">
            <a onClick={() => Router.push('/calendario')}>Calendario</a>
          </Menu.Item>

          <Menu.Item key="generosos">
            <a onClick={() => Router.push('/corazones-generosos')}>
              Corazones generosos
            </a>
          </Menu.Item>

          {/* <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Link to="/corazones-generosos">Corazones generosos</Link>
              </span>
            }
          >
            <Menu.Item key="donacion-mce">Donación Misión Elim</Menu.Item>
            <Menu.Item key="donacion-central">Donación Elim Central</Menu.Item>
          </SubMenu> */}

          <Menu.Item key="contact">
            <a onClick={() => Router.push('/contact')}>Contacto</a>
          </Menu.Item>

          {/* <Menu.Item key="users">
            <Link to="/users">Prédicas</Link>
          </Menu.Item> */}
        </Menu>
      </Affix>
    </div>
  );
}
