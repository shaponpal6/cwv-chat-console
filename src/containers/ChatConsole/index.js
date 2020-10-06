import React, {  useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../store";
import 'antd/dist/antd.css';
import "./style.css";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;


const ChatApp = () => {
  const [state, dispatch] = useContext(AppContext);

  // // Chat Button Open / Close
  // const onChatButtonClick = (e) => {
  //   console.log(e);
  //   onChatStartClick()
  //   dispatch({
  //     type: 'ON_OFF',
  //     payload: 'chatWidget',
  //   });
  // };

  // // Chat Welcome Open / Close
  // const onChatWelcomeBoxClose = () => {
  //   dispatch({
  //     type: 'ON_OFF',
  //     payload: 'welcomeBox',
  //   });
  // };

  // // Chat Start Button
  // const onChatStartClick = () => {
  //   dispatch({
  //     type: 'SET_ROUTE',
  //     payload: 'chatWidget',
  //   });
  // };

  return (
    <div className="wpcwv-console">

      {/* {(state.chatRoute === "chatWidget" && state.chatWidget) && <ChatWidget />} */}

      <Layout>
        
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Console
            </Content>
          </Layout>
        </Layout>
      </Layout>
    
    </div>
  );
};

export default ChatApp;
