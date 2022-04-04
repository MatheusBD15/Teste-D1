import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import './styles.css';
import {
  ShoppingCartOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider width={200} breakpoint="md" collapsedWidth="50">
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item
          key="1"
          className="MenuItem"
          icon={<ShoppingCartOutlined />}
          onClick={() => navigate('/')}
        >
          Clientes
        </Menu.Item>
        <Menu.Item
          key="2"
          className="MenuItem"
          icon={<FileDoneOutlined />}
          onClick={() => navigate('/register-client')}
        >
          Registrar cliente
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
