import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { useCollectionDataOnce, useDocumentOnce  } from "react-firebase-hooks/firestore";
import { withFirebase } from "../../firebase";

import { addMessage } from "../../redux/actions";
import DraftMessageEditor from "../../components/DraftMessageEditor";
import MessageConponent from "../../components/MessageConponent";
import UserConponent from "../../components/UserConponent";
// import MessagesContainer from "../../components/MessagesContainer";
import {myChatTabs, myChatActions} from '../../constants'
import { Layout, Card, Avatar, Row, Col } from "antd";

import "./style.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Content, Sider } = Layout;


const ChatApp = ({ firebase }) => {
  const [chatUsersList, chatUsersListLoading, chatUsersListError] = useDocumentOnce(
    firebase.getListData(),
    {
      getOptions: { source: "default" },
      idField:"uid"
    }
  );

 
  
  // const [loadData, setLoadDataState] = useState(false);
  const messages = useSelector((state) => state.chatConsole.messages);
  // const clients = useSelector((state) => state.chatConsole.clientsList);
  const dispatch = useDispatch();
 



  /**
   * myChatTabsState Handeler
   * Load Clients by filtering tab key
   * 
   * For Archived read data from differents documeny
   */
  const [myChatTabsState, setMyChatTabsState] = useState(myChatTabs[1].key);

  // myChatTabsState onChange Handeler
  const onMyChatTabChange = (key) => {
    console.log({ [key]: key });
    setMyChatTabsState( key );
  };

  /**
   * myChatActionsState Handeler
   * Load Clients Details by filtering tab key
   */
  const [myChatActionState, setMyChatActionsState] = useState(myChatActions[0].key);

  // myChatActionsState onChange Handeler
  const onMyChatActionTabChange = (key) => {
    console.log({ [key]: key });
    setMyChatActionsState( key );
  };

  const onMessageSave = (replay) => {
    const {uid, displayName, photoURL} = firebase.getCurrentUser();
    const message = {
      key: uniqid('sp'),
      text: replay,
      type: 'admin',
      status: 0,
      senderID: uid,
      name: displayName,
      photoURL: photoURL,
      time: 'ss',
    }


    const uid2 = '7ghkuJPNoOg7xp0V08ag';
    const uid3 = uniqid('sp');
    const addMessageToFirebase = firebase.updateMessages(uid2,  message);
    const addMessageToFirebase2 = firebase.updateUserListMap(uid3,  {name:message.text, uid: uid3, type:"onChat"});
    
    console.log(addMessageToFirebase, addMessageToFirebase2);
    console.log(message);
    dispatch(addMessage(message));
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
            tabList={myChatTabs}
            activeTabKey={myChatTabsState}
            tabBarExtraContent={<span>Setting</span>}
            onTabChange={(key) => onMyChatTabChange(key)}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >

          {chatUsersListError && <strong>Error: {JSON.stringify(chatUsersListError)}</strong>}
          {chatUsersListLoading && <span>Document: Loading...</span>}
          {/* {chatUsersList && <span>Document: {JSON.stringify(chatUsersList.data())}</span>} */}
          {chatUsersList && console.log('clientList', chatUsersList.data())}

          {chatUsersList && chatUsersList.data().users
              ? Object.entries(chatUsersList.data().users).map((user, index) => {
                  console.log("user, index");
                  console.log(user, index);
                  console.log(typeof user);
                  // return <Todo key={`todo-${todo.id}`} todo={todo} />;
                  return (
                    <UserConponent
                      key={user[0]}
                      onClick={onUserClick}
                      user={user[1]}
                    />
                  );
                })
              : "No User"}

           
            {myChatTabsState}
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
            title={'Client Name'}
            tabBarExtraContent={<span>Setting</span>}
            actions={[<DraftMessageEditor onMessageSave={onMessageSave} />]}
          >
            

            

            {messages && messages.length
              ? messages.map((message, index) => {
                  console.log("message, index");
                  console.log(message, index);
                  console.log(typeof message);
                  // return <Todo key={`todo-${todo.id}`} todo={todo} />;
                  return (
                    <MessageConponent
                      key={message.key}
                      message={message}
                    />
                  );
                })
              : "No todos, yay!"}

            {/* <MessagesContainer /> */}
          </Card>
        </Content>
      </Col>
      <Col xs={24} xl={6}>
        <Sider width={"100%"} className="site-layout-background">
          <Card
            style={{ width: "100%" }}
            tabList={myChatActions}
            activeTabKey={myChatActionState}
            tabBarExtraContent={<span>Setting</span>}
            onTabChange={(key) => onMyChatActionTabChange(key)}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            {myChatActionState}
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

export default withFirebase(ChatApp);
