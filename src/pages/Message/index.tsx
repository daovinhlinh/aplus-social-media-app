import {
  Button,
  HStack,
  Image,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { SocketContext} from "../../utils/SocketContext"
import { Context } from "../../context/Context";
import axios from "axios";
import Navbar from "../../components/NavBar";
import DetailMess from "../../components/DetailMess";
import Messenger from "../../components/Messenger";
import ChatOnline from "../../components/ChatOnline";
import { OutlinedInput } from "@mui/material";

export default function Message({socket}) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useContext(Context);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current?.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current?.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/conversation/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current?.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    socket.current?.emit("sendNotification", {
      sendUserName: user.username,
      sendUserId: user._id,
      receiveUserId: receiverId,
      post: newMessage,
      type:8
    });

    try {
      axios.post("http://localhost:3001/api/notification",{ 
        sendUserId: user._id,
        sendUserName: user.username,
        receiveUserId: receiverId,
        type: 8,
        post: newMessage
      });
    } 
    catch (err) {
      console.log(err)
    }

    try {
      const res = await axios.post("http://localhost:3003/api/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }, [messages]);

  return (
    <>
      <Navbar socket={socket}/>
      <Box height={'100vh-70px'} display={'flex'}>
        <Box flex={3}>
          <Box padding={10} height={'100%'}>
            <Input placeholder="Search for friends" width={"90%"} 
              padding={'10px 0'}
              border={'none'}
              borderBottom = {'1px solid gray'}
            />
            {conversations.map((c) => (
              <Box onClick={() => setCurrentChat(c)}>
                <DetailMess conversation={c} currentUser={user} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box flex={5.5} width={'100%'} padding={20}>
            {currentChat ? (
              <><Box display={"flex"} flexDirection="column" justifyContent={'space-between'}
                position="relative" borderRadius={15} boxShadow ="0px 0px 16px -8px rgba(0, 0, 0, 0.68)"
                padding={10} height='100%'
              >
                <Box  height={'100%'} overflowY='scroll' padding={15} borderRadius={15}>
                  {messages.map((m) => (
                    <Box ref={scrollRef}>
                      <Messenger message={m} own={m.sender === user._id}/>
                    </Box>
                  ))}
                </Box>
                <Box display={'flex'} alignItems='center' justifyContent={'space-between'}
                  backgroundColor='rgb(240, 193, 128)' marginTop={10} borderRadius={15}
                >
                  <Input
                    width={'80%'}
                    height={90}
                    margin={10}
                    marginTop={20}
                    border="0px solid white"
                    borderRadius={20}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <Button 
                    width={70}
                    height={40}
                    border='none'
                    borderRadius={5}
                    cursor='pointer'
                    backgroundColor={'lightseagreen'}
                    color='whiteAlpha.700'
                    marginRight={25}
                    fontSize={18}
                    onClick={handleSubmit}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
              </>
            ) : null}
        </Box>
        <Box flex={3.5}>
          <Box padding={10}
            height='100%'
          >
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}