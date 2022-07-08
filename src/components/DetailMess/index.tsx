import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useBoolean,
} from "@chakra-ui/react";

export default function DetailMess({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:3001/api/user?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <Box display={'flex'} alignItems="center" padding={10}
      cursor="pointer" marginTop={20} 
      _hover={{
        bg: "rgb(245, 243, 243)",
        boxShadow: "base",
      }}
    >
      <Box>
          <Image
              height={40}
              width={40}
              borderRadius={100}
              marginRight={3}
              src={
                user?.avatar
                  ? 'http://localhost:3001/user/images/' + user.avatar
                  : 'http://localhost:3001/user/images/person/noAvatar.png'
              }
            />
          <Text color="black" fontWeight="bold" fontSize={"md"}>{user?.username}</Text>
      </Box>
    </Box>
  );
}