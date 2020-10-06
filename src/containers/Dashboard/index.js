import React, { useContext } from "react";
import { Layout } from "antd";

import { AppContext } from "../../store";
import "antd/dist/antd.css";
import "./style.css";

const {  Content } = Layout;

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
    <div className="wpcwv-dashboard">

      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Dashboard
        </Content>
      </Layout>
    </div>
  );
};

export default ChatApp;
