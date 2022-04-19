
import React, { useState,Fragment} from 'react';
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BlockOutlined, LaptopOutlined, NotificationOutlined,BookOutlined } from '@ant-design/icons';
import './Navibar.css';

const SignInLogin = (props) => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
    return(
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub2" icon={<BlockOutlined />} title="Account Creation">
              <Menu.Item key="2">Feed  <Link to="/" /> </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<BookOutlined />} title="Documentation">
              <Menu.Item key="5">What is Mevo? <Link to="/docsMevo" /> </Menu.Item>
              <Menu.Item key="6">How our Application Works <Link to="/docsApplication" /> </Menu.Item>
              <Menu.Item key="7">Why Blockchains? <Link to="/docsBlockchains" /> </Menu.Item>
              <Menu.Item key="8">Future Functions <Link to="/docsFuture" /> </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
}

export default SignInLogin;