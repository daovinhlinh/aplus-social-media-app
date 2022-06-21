import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Options from "../../assets/Icons/Options";
import { UserData, userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";
import { convertToDateTime } from "../../utils/datetime";
import CustomButton from "../CustomButton";
import DetailCard from "../DetailCard";
import InputField from "../InputField";
import LoadingSpinner from "../LoadingSpinner";
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
export interface Comment {
   _id: string;
   userId: string;
   postId: string;
   desc: string;
   createdAt: Date;
   updatedAt: Date;
   __v: number;
}
export interface CommentDetail {
   comments: Comment[];
   users: UserData[];
}

const FeedCard = ({ desc, _id, likes, createdAt, userId }: IFeed) => {
   const [comment, setComment] = useState<CommentDetail>();
   const [commentText, setCommentText] = useState("");
   const userData = useRecoilValue(userDataState);
   const [likeCount, setLikeCount] = useState<number>(likes.length);
   const [loading, setLoading] = useState(true);
   const [liked, setLiked] = useState(false);
   const imgFolder = import.meta.env.VITE_CDN_URL;

   useEffect(() => {
      if (likes.includes(userData._id)) {
         setLiked(true);
      }

      if (!comment) {
         (async () => {
            const commentListRes = await axiosClient.get(`/comment/${_id}`);
            setComment(commentListRes.data);
            setLoading(false);
         })();
      }
   }, []);

   const handleLikePost = () => {
      axiosClient.put(`post/${_id}/like`, { userId: userData._id });
      setLikeCount(liked ? likeCount - 1 : likeCount + 1);
      setLiked(!liked);
   };

   if (loading) {
      return <LoadingSpinner />;
   }

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
               userId={userId}
               label2={convertToDateTime(createdAt)}
               leftImg="https://www.w3schools.com/howto/img_avatar.png"
               rightIcon={<Options />}
               onClick={() => {}}
            />
         </Box>
         <Text textAlign={"left"} marginTop={"5"} fontWeight={700}>
            {desc}
         </Text>
         <Flex
            justifyContent="space-around"
            paddingY="3"
            borderY="1px"
            borderColor="gray.300"
            my={4}
            px={4}
         >
            <CustomButton onClick={handleLikePost} leftIcon={<Heart />}>
               <Text
                  fontSize={14}
                  fontWeight={600}
                  color={liked ? "red.500" : "#696969"}
               >
                  {likeCount} Likes
               </Text>
            </CustomButton>
            <HStack>
               <Comment />
               <Text fontSize={14} fontWeight={600} color="#696969">
                  {comment.comments.length ?? 0}
               </Text>
            </HStack>
         </Flex>
         <InputField
            image="https://www.w3schools.com/howto/img_avatar.png"
            placeholder="Write your comment..."
            onChange={setCommentText}
         />
         {comment && (
            <Stack mt={2} spacing={2}>
               {comment.comments.map((item, index) => {
                  return (
                     <Box display="flex" alignItems="center">
                        <Image
                           width="32px"
                           height="32px"
                           borderRadius="50%"
                           mr={5}
                           src="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Box
                           textAlign="left"
                           backgroundColor="#F0F2F5"
                           padding="8px 12px"
                           borderRadius="18px"
                        >
                           <Text fontWeight={700}>
                              {comment.users[index].username}
                           </Text>
                           <Text>{item.desc}</Text>
                        </Box>
                     </Box>
                  );
               })}
            </Stack>
         )}
      </Box>
   );
};

export default FeedCard;
