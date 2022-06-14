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
import CustomButton from "../CustomButton";
import DetailCard from "../DetailCard";
import InputField from "../InputField";
import styles from "./styles.module.scss";

const detailcards = [
   {
      title1: "Dao vinh ling",
      title2: "buck foiz",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon: <Options />,
   },
];
const FeedCard = ({ desc, id, like, createAt, userId }) => {
   const [comment, setComment] = useState<string>("");
   const userData = useRecoilValue(userDataState);
   const [likeCount, setLikeCount] = useState<number>(like.length);
   const [liked, setLiked] = useState(false);

   useEffect(() => {
      if (like.includes(userData._id)) {
         setLiked(true);
      }
   }, []);

   const handleLikePost = () => {
      axiosClient.put(`post/${id}/like`, { userId: userData._id });
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
               label2={createAt}
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
               onClick={() => {}}
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
               <Text fontSize={14} fontWeight={600} color="#696969">
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
         <InputField
            image="https://www.w3schools.com/howto/img_avatar.png"
            placeholder="Write your comment..."
            onChange={setComment}
         />
      </Box>
   );
};

export default FeedCard;
