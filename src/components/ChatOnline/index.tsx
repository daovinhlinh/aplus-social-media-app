import { Box, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("http://localhost:3001/api/user/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:3003/api/conversation/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box >
      {onlineFriends.map((o) => (
        <Box display={'flex'} alignItems='center' fontWeight={500} 
            cursor="pointer" marginTop={10} onClick={() => handleClick(o)}
        >
            <Box position={'relative'} marginRight={10}>
                <Image
                    height={40}
                    width={40}
                    borderRadius={100}
                    marginRight={3}
                    src={
                        o?.avatar
                        ? 'http://localhost:3001/user/images/' + o.avatar
                        : 'http://localhost:3001/user/images/person/noAvatar.png'
                    }
                />
                <Box width={10} height={10} borderRadius={'50%'} backgroundColor='limegreen'
                    position={'absolute'}
                    top={2}
                    right={2}
                ></Box>
            </Box>
          <Text>{o?.username}</Text>
        </Box>
    ))}
    </Box>
  );
}