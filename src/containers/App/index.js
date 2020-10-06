import React, {  useContext } from "react";
import { Layout, Menu } from "antd";

import { AppContext } from "../../store";

import Dashboard from '../Dashboard';
import ChatConsole from '../ChatConsole';


import 'antd/dist/antd.css';
import "./style.css";

const { Header } = Layout;


const ChatApp = () => {
  const [state, dispatch] = useContext(AppContext);

  // Chat Button Open / Close
  const onMenuClick = (e) => {
    console.log(e.key);
    dispatch({
      type: 'SET_ROUTE',
      payload: e.key ? e.key : 'dashboard',
    });
  };

  return (
    <div className="wpcwv-adminContainer">
      <h2>Do not Think so much. Just work</h2>

      

      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[state.chatRoute]}>
            <Menu.Item key="dashboard" onClick={onMenuClick}>Dashboard</Menu.Item>
            <Menu.Item key="console" onClick={onMenuClick}>Console</Menu.Item>
            <Menu.Item key="3" onClick={onMenuClick}>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
         {/* Page here */}
         {state.chatRoute === "dashboard"  && <Dashboard />}
         {state.chatRoute === "console"  && <ChatConsole />}

        </Layout>
      </Layout>
    
    </div>
  );
};

export default ChatApp;
