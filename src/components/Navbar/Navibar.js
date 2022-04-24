import React, { useState,Fragment } from 'react';
import ReactDOM from 'react-dom'
import { useSelector } from "react-redux";
import SignInLogin from "./SignInLogin";
import LoggedIn from "./LoggedIn";
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
import HomePage from "../../pages/disconnected/HomePage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined,BookOutlined } from '@ant-design/icons';
import Docs from "../../pages/connected/Docs/Docs";
import './Navibar.css';

const Navibar = (props) => {

const navStatus = useSelector((state) => state.navbar.navType);
const { SubMenu } = Menu;
const { Header, Sider, Footer } = Layout;
console.log(navStatus);

    return(
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Mevo  <Link to="/feed" /> </Menu.Item>
          <Menu.Item key="2">{navStatus === "login" ? "Login" :"Signout" }{navStatus === "login" ? <Link to="/login" />:<Link to="/signout" /> } </Menu.Item>
          </Menu>
        </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {navStatus === "login" ? <SignInLogin /> : <LoggedIn />}
          </Menu>
        </Sider>
        <Layout style={{ padding: '10vw 2vw 2vw' }}>
          {/* <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 100,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content> */}
          {props.children}
        </Layout>
      </Layout>
    </Layout>
    );
}

export default Navibar;