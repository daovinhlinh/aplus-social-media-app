import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Options from "../../assets/Icons/Options";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";
import DetailCard from "../DetailCard";

const Friendslist = (props: any) => {
   const userData = useRecoilValue(userDataState);
   const [friends, setFriends] = useState([]);
   const imgFolder = import.meta.env.VITE_CDN_URL;

   useEffect(() => {
      getFriendList();
   }, []);

   const getFriendList = async () => {
      const getFriendRes = await axiosClient.get(`/user/friends/${userData._id}`);
      setFriends(getFriendRes.data);
   };

   return (
      <Box
         borderRadius={20}
         mt="30px"
         bg="rgba(250, 250, 251, 1)"
         boxShadow="base"
         width="100%"
         minWidth="300px"
         p="20px"
      >
         <Text color="black" fontWeight="600" fontSize="30px" mb="10px">
            Friends
         </Text>
         <SimpleGrid columns={2} minChildWidth="45%" spacing="20px">
            {friends.map((item) => (
               <DetailCard
                  key={item._id}
                  label2={item.username}
                  imgSize={35}
                  leftImg={`${imgFolder}${item.avatar}`}
                  // rightIcon={<Options />}
                  onClick={() => { }}
                  width={friends.length > 1 ? "100%" : "50%"}
                  border="1px solid #E5E5E5"
                  borderRadius={15}
                  alignItems="center"
                  padding="5px"
               />
            ))}
         </SimpleGrid>
      </Box>
   );
};

export default Friendslist;
