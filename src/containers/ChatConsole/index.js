import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { withFirebase } from "../../firebase";

import { addMessage, setClientID, setMessages } from "../../redux/actions";
import DraftMessageEditor from "../../components/DraftMessageEditor";
import UserConponent from "../../components/UserConponent";
import MessagesContainer from "../../components/MessagesContainer";
import ClientDetailsComponent from "../../components/ClientDetailsComponent";
import { myChatTabs } from '../../constants'
import { Layout, Card, Row, Col } from "antd";

import "./style.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const { Content, Sider } = Layout;




const ChatApp = ({ firebase }) => {
  const { clientId } = useSelector((state) => state.chatConsole);
  const dispatch = useDispatch();

  const [chatUsersList, chatUsersListLoading, chatUsersListError] = useDocumentOnce(
    firebase.getListData(),
    {
      getOptions: { source: "default" },
      idField: "uid"
    }
  );



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
    setMyChatTabsState(key);
  };



  const onMessageSave = (replay) => {
    const { uid, displayName, photoURL } = firebase.getCurrentUser();
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


    // const uid2 = '7ghkuJPNoOg7xp0V08ag';
    const uid4 = clientId;
    // const uid3 = uniqid('sp');
    firebase.setMessages(uid4, message);
    // const addMessageToFirebase2 = firebase.updateUserListMap(uid3,  {name:message.text, uid: uid3, type:"onChat"});
    dispatch(addMessage(message));
  };


  const onChatUserClick = (clientID) => {
    dispatch(setClientID(clientID));
    dispatch(setMessages(''));
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
            {chatUsersListLoading && <span>Loading...</span>}

            {chatUsersList && chatUsersList.data().users
              ? Object.entries(chatUsersList.data().users).map((user, index) => {
                // console.log("user, index");
                // console.log(user, index);
                // console.log(typeof user);
                // return <Todo key={`todo-${todo.id}`} todo={todo} />;
                return (
                  <UserConponent
                    key={user[0]}
                    onClick={() => onChatUserClick(user[0])}
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


            {clientId !== "" && <MessagesContainer clientUID={clientId} />}



            {/* <MessagesContainer /> */}
          </Card>
        </Content>
      </Col>
      <Col xs={24} xl={8}>
        <Sider width={"100%"} className="site-layout-background">

          <ClientDetailsComponent />

        </Sider>
      </Col>

    </Row>
  );
};

export default withFirebase(ChatApp);
