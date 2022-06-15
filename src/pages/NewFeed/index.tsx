import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Photo from "../../assets/Icons/Photo";
import Send from "../../assets/Icons/Send";
import FeedCard, { IFeed } from "../../components/FeedCard";
import InputField from "../../components/InputField";
import PageContainer from "../../components/PageContainer";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";

const NewFeed = () => {
   const [feedList, setFeedList] = useState([]);
   const [postText, setPostText] = useState("");
   const [loading, setLoading] = useState(false);
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

      if (postText) {
         await axiosClient.post("post", submitPost);
      }
   };

   useEffect(() => {
      (async () => {
         if (userData) {
            setLoading(true);
            const getFeed = await axiosClient.get(
               `post/timeline/${userData._id}`
            );
            setFeedList(getFeed.data);
            setLoading(false);
         }
      })();
   }, [userData]);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <React.Suspense fallback={<div>Loading...</div>}>
         <PageContainer page="Post">
            {feedList.length > 0 && (
               <>
                  <Box
                     width={"100%"}
                     bgColor="#FFF"
                     px="30px"
                     py="20px"
                     borderRadius="15px"
                     mb="40px"
                  >
                     <Text
                        textAlign="left"
                        color="black"
                        fontWeight={600}
                        mb="29px"
                     >
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
                        onChange={(text) => {
                           setPostText(text);
                        }}
                        image="https://www.w3schools.com/howto/img_avatar.png"
                        placeholder="Post something..."
                     />
                  </Box>
                  <Box>
                     {feedList
                        .map((feed: IFeed) => {
                           const { _id, userId, desc, likes, createdAt } = feed;
                           return (
                              <FeedCard
                                 desc={desc}
                                 _id={_id}
                                 likes={likes}
                                 createdAt={createdAt}
                                 userId={userId}
                              />
                           );
                        })
                        .reverse()}
                  </Box>
               </>
            )}
         </PageContainer>
      </React.Suspense>
   );
};

export default NewFeed;
