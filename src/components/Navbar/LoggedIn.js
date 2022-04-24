import {
    TeamOutlined,
    FileOutlined,
    CalculatorOutlined,
    BlockOutlined,
    UserDeleteOutlined,
    RiseOutlined,
    ToTopOutlined,
    PoweroffOutlined,
    FileDoneOutlined,
    ExperimentOutlined,
    UserOutlined,
    NotificationOutlined,
    LaptopOutlined,

    BookOutlined,
  } from "@ant-design/icons";
  import { useSelector } from "react-redux";
  import { Menu, Badge, Layout } from "antd";
  import { Link } from "react-router-dom";
  
  const LoggedIn = () => {
    const credits = useSelector((state)=>state.navbar.credits)
    const { SubMenu } = Menu;
    const { Header, Sider, Footer } = Layout;
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="1">Account Manager  <Link to="/account" /> </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ExperimentOutlined />} title="Feed">
            <Menu.Item key="2">Explore Posts <Link to="/feed" /> </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<LaptopOutlined />} title="Friends">
            <Menu.Item key="3">Friends List <Link to="/working" /> </Menu.Item>
            <Menu.Item key="4">Find Friends <Link to="/working" /> </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="Communities">
            <Menu.Item key="5">Subscriptions <Link to="/working" /> </Menu.Item>
            <Menu.Item key="6">Explore <Link to="/working" /> </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<BookOutlined />} title="Documentation">
            <Menu.Item key="7">What is Mevo? <Link to="/docsMevo" /> </Menu.Item>
            <Menu.Item key="8">How our Application Works <Link to="/docsApplication" /> </Menu.Item>
            <Menu.Item key="9">Why Blockchains? <Link to="/docsBlockchains" /> </Menu.Item>
            <Menu.Item key="10">Future Functions <Link to="/docsFuture" /> </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  };
  export default LoggedIn;