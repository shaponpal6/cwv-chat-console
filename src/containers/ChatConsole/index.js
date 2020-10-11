import React, { useState } from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/actions";
import DraftEditor from "../../components/DraftEditor";
import { Layout, Card, Avatar, Row, Col } from "antd";

import "./style.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const tabListNoTitle = [
  {
    key: "all",
    tab: "All",
  },
  {
    key: "myChat",
    tab: "My Chat",
  },
  {
    key: "archived",
    tab: "Archived",
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const { Content, Sider } = Layout;

const ChatApp = ({ messages }) => {
  const [tabState, setTabState] = useState({
    key: "tab1",
    noTitleKey: "app",
  });

  console.log("messages....", messages);

  const onTabChange = (key, type) => {
    console.log(key, type);
    setTabState({ [type]: key });
  };

  const onUserClick = (key, type) => {
    console.log(key, type);
    // setTabState({ [type]: key });
  };

  return (
    <Row>
      <Col xs={24} xl={6}>
        <Sider width={"100%"} className="site-layout-background">
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={tabState.noTitleKey}
            tabBarExtraContent={<span>Setting</span>}
            onTabChange={(key) => {
              onTabChange(key, "noTitleKey");
            }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Card hoverable style={{ width: "100%" }}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
                onClick={(key) => {
                  onUserClick(key, "noTitleKey");
                }}
              />
            </Card>

            {contentListNoTitle[tabState.noTitleKey]}
          </Card>
        </Sider>
      </Col>
      <Col xs={24} xl={10}>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Card
            style={{ width: "100%", textAlign: "left" }}
            tabList={tabListNoTitle}
            activeTabKey={tabState.noTitleKey}
            tabBarExtraContent={<span>Setting</span>}
            onTabChange={(key) => {
              onTabChange(key, "noTitleKey");
            }}
            actions={[<DraftEditor />]}
          >
            {contentListNoTitle[tabState.noTitleKey]}

            {console.log("messages, messages.length")}
            {console.log(messages, messages.length)}
            {console.log(messages && messages.length)}
            {messages && messages.length
              ? messages.map((message, index) => {
                  console.log("message, index");
                  console.log(message, index);
                  // return <Todo key={`todo-${todo.id}`} todo={todo} />;
                  return (
                    <Meta
                      key={`todo-${message.id}`}
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={message.text}
                      description="This is the description"
                    />
                  );
                })
              : "No todos, yay!"}

            {/* <DraftEditor /> */}
          </Card>
        </Content>
      </Col>
      <Col xs={24} xl={6}>
        <Sider width={"100%"} className="site-layout-background">
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={tabState.noTitleKey}
            tabBarExtraContent={<span>Setting</span>}
            onTabChange={(key) => {
              onTabChange(key, "noTitleKey");
            }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            {contentListNoTitle[tabState.noTitleKey]}
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Sider>
      </Col>
      <Col xs={24} xl={2}>
        4 col-order-responsive
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  console.log("messages");
  console.log(state.chatConsole.messages);
  return { messages: state.chatConsole.messages };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { addMessage })(ChatApp);
