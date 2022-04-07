import React, { useState,Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
import HomePage from "../../pages/disconnected/HomePage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined,BookOutlined } from '@ant-design/icons';
import Docs from "../../pages/connected/Docs/Docs";
import './Navibar.css';

const Navibar = (props) => {

  const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    return(
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Mevo  <Link to="/" /> </Menu.Item>
          <Menu.Item key="2">Login  <Link to="/Login" /> </Menu.Item>
          </Menu>
        </Header>
      {/*<Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header> */}
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
              <Menu.Item key="1">Account Information  <Link to="/" /> </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Friends">
              <Menu.Item key="2">Friends List</Menu.Item>
              <Menu.Item key="3">Find Friends</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Communities">
              <Menu.Item key="4">Subscriptions</Menu.Item>
              <Menu.Item key="5">Explore</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<BookOutlined />} title="Documentation">
              <Menu.Item key="6">What is Mevo? <Link to="/docsMevo" /> </Menu.Item>
              <Menu.Item key="7">How our Application Works <Link to="/docsApplication" /> </Menu.Item>
              <Menu.Item key="8">Why Blockchains? <Link to="/docsBlockchains" /> </Menu.Item>
              <Menu.Item key="9">Future Functions <Link to="/docsFuture" /> </Menu.Item>
            </SubMenu>
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