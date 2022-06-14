import {
   Box,
   Container,
   Flex,
   HStack,
   Text,
   Image,
   Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Options from "../../assets/Icons/Options";
import Share from "../../assets/Icons/Share";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";
import { convertToDateTime } from "../../utils/datetime";
import CustomButton from "../CustomButton";
import DetailCard from "../DetailCard";
import InputField from "../InputField";
import styles from "./styles.module.scss";

export interface IFeed { 
   _id: string;
   userId: string;
   desc: string;
   img?: string;
   likes: string[];
   createdAt: Date;
   updatedAt?: Date;
}

const FeedCard = ({ desc, _id, likes, createdAt, userId }: IFeed) => {
   const [comment, setComment] = useState<any>();
   const userData = useRecoilValue(userDataState);
   const [likeCount, setLikeCount] = useState<number>(likes.length);
   const [liked, setLiked] = useState(false);

   useEffect(() => {
      if (likes.includes(userData._id)) {
         setLiked(true);
      }

      (async ()=> {
         const commentListRes = await axiosClient.get(`/comment/${_id}`);               
         setComment(commentListRes.data);
      })();
   
   }, []);

   const handleLikePost = () => {
      axiosClient.put(`post/${_id}/like`, { userId: userData._id });
      setLikeCount(liked ? likeCount - 1 : likeCount + 1);
      setLiked(!liked);
   };

   return (
      <Box
         width={"100%"}
         bgColor="#FFF"
         px="30px"
         py="20px"
         mb="20px"
         borderRadius="15px"
      >
         <Box className={styles.detailcard}>
            <DetailCard
               label1={userId}
               label2={convertToDateTime(createdAt)}
               leftImg={
                  <Image
                     src="https://www.w3schools.com/howto/img_avatar.png"
                     height={50}
                     width={50}
                     borderRadius={100}
                     marginRight={3}
                  />
               }
               rightIcon={<Options />}
               onClick={() => { }}
            />
         </Box>
         <Text textAlign={"left"} marginTop={"2"} fontWeight={700}>
            {desc}
         </Text>
         <Flex
            justifyContent="space-between"
            paddingY="3"
            borderY="1px"
            borderColor="gray.300"
            my={4}
            px={4}
         >
            <CustomButton onClick={handleLikePost} leftIcon={<Heart />}>
               <Text fontSize={14} fontWeight={600} color={liked ? "red.500" :  "#696969"}>
                  {likeCount} Likes
               </Text>
            </CustomButton>
            <HStack>
               <Comment />
               <Text fontSize={14} fontWeight={600} color="#696969">
                  100 Comments
               </Text>
            </HStack>
            <HStack>
               <Share />
               <Text fontSize={14} fontWeight={600} color="#696969">
                  100 Comments
               </Text>
            </HStack>
         </Flex>
         {
            comment && 
         <Flex flexDirection='column'>
               {
                  comment.comments.map((item, index)=> {
                     return (
                        <div>{comment.users[index].username} : {item.desc}</div>
                     )
                  }) 
               }
         </Flex>
             }
         <InputField
            image="https://www.w3schools.com/howto/img_avatar.png"
            placeholder="Write your comment..."
            onChange={setComment}
         />
      </Box>
   );
};

export default FeedCard;
