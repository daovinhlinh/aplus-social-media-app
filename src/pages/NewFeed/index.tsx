import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Photo from "../../assets/Icons/Photo";
import Send from "../../assets/Icons/Send";
import FeedCard from "../../components/FeedCard";
import InputField from "../../components/InputField";
import PageContainer from "../../components/PageContainer";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";

const NewFeed = () => {
   const [posts, setPosts] = useState([]);
   const [postText, setPostText] = useState("");
   const userData = useRecoilValue(userDataState);
   const [img, setImg] = useState(null);

   const handlePost = async () => {
      const submitPost = {
         userId: userData._id,
         desc: postText,
      };

      if (img) {
         const form = new FormData();
         const fileName = Date.now() + img.name;
         form.append("name", fileName);
         form.append("file", img);
         submitPost["img"] = fileName;

         await axiosClient.post("upload", form);
      }
      await axiosClient.post("post", submitPost);
   };

   useEffect(() => {
      (async () => {
         const fetchPosts = await axiosClient.get(
            `post/timeline/${userData._id}`
         );
         setPosts(fetchPosts.data);
      })();
   }, []);

   return (
      <PageContainer page="Post">
         <Box
            width={"100%"}
            bgColor="#FFF"
            px="30px"
            py="20px"
            borderRadius="15px"
            mb="40px"
         >
            <Text textAlign="left" color="black" fontWeight={600} mb="29px">
               Post something
            </Text>
            <InputField
               suffixIcons={[
                  {
                     icon: <Photo />,
                     onPress: () => {},
                  },
                  {
                     icon: <Send />,
                     onPress: handlePost,
                  },
               ]}
               onChange={(e) => {
                  setPostText(e.target.value);
               }}
               image="https://www.w3schools.com/howto/img_avatar.png"
               placeholder="Post something..."
            />
         </Box>
         <FeedCard />
      </PageContainer>
   );
};

export default NewFeed;
