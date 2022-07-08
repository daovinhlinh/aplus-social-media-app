import "./Messenger.css";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";


export default function Messenger({ message, own }) {
  const [user, setUser] = useState();

  useEffect(() => {

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user?userId=" + message.sender);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);


  return (
    <Box className={own ? "message own" : "message"} display='flex'
      flexDirection={'column'}
      marginTop={20}
    >
      {user? <><Box display={'flex'}>
        <Image
          width={32}
          height={32}
          borderRadius="50%"
          objectFit={"cover"}
          marginRight={10}
          src={user.avatar
            ? 'http://localhost:3001/user/images/' + user.avatar
            : 'http://localhost:3001/user/images/person/noAvatar.png'}
        />
        <Text className="messageText" padding ={10} 
          borderRadius={20}
          backgroundColor="rgb(245, 241, 241)" color={'black'}
          maxWidth={300}
        >{message.text}</Text>
      </Box>
      <Box fontSize={12} marginTop={10}>{format(message.createdAt)}</Box></>: null}
    </Box>
  );
}