import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Options from "../../assets/Icons/Options";
import Send from "../../assets/Icons/Send";
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
  deletePost: () => void;
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

const FeedCard = ({
  desc,
  _id,
  likes,
  createdAt,
  userId,
  deletePost,
}: IFeed) => {
  const [comment, setComment] = useState<CommentDetail>();
  const [commentText, setCommentText] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [postUser, setPostUser] = useState<UserData>();
  const userData = useRecoilValue(userDataState);
  const [likeCount, setLikeCount] = useState<number>(likes.length);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const imgFolder = import.meta.env.VITE_CDN_URL;

  const fetchPostUser = () => axiosClient.get(`user?userId=${userId}`);

  const fetchPostComment = () => axiosClient.get(`/comment/${_id}`);

  useEffect(() => {
    if (likes.includes(userData._id)) {
      setLiked(true);
    }
    Promise.all([fetchPostUser(), fetchPostComment()])
      .then((res) => {
        setPostUser(res[0].data);
        setComment(res[1].data);
      })
      .then(() => setLoading(false));
  }, []);

  const handleCommentPost = async () => {
    const newComment = { userId: userData._id, postId: _id, desc: commentText };
    const res = await axiosClient.post("comment", newComment);

    // const newData = {
    //   ...comment,
    //   comments: [res.data ,comment.comments]
    // }
    setComment({
      users: [userData, ...comment.users],
      comments: [res.data, ...comment.comments],
    });
    // setPostUser([...postUser, ...userData]);
  };

  const handleLikePost = () => {
    axiosClient.put(`post/${_id}/like`, { userId: userData._id });
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  if (loading) {
    return (
      <Box height="100px">
        <LoadingSpinner />
      </Box>
    );
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
          userId={postUser.username}
          label2={convertToDateTime(createdAt)}
          leftImg="https://www.w3schools.com/howto/img_avatar.png"
          rightIcon={<Options />}
          deletePost={deletePost}
        />
      </Box>
      <Text textAlign={"left"} marginTop={"5"} fontWeight={700}>
        {desc}
      </Text>
      <Flex
        justifyContent="space-around"
        paddingY="3px"
        borderY="1px"
        borderColor="gray.300"
        my={4}
        px={10}
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
        <CustomButton
          leftIcon={<Comment />}
          onClick={() => setShowComment(!showComment)}
        >
          <Text fontSize={14} fontWeight={600} color="#696969">
            {comment.comments.length ?? 0} comments
          </Text>
        </CustomButton>
      </Flex>
      {showComment && (
        <>
          <InputField
            image="https://www.w3schools.com/howto/img_avatar.png"
            placeholder="Write your comment..."
            onChange={setCommentText}
            suffixIcons={[
              {
                icon: <Send />,
                onPress: handleCommentPost,
              },
            ]}
          />
          {comment && (
            <Stack mt={2} spacing={2}>
              {comment.comments
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((item, index) => {
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
        </>
      )}
    </Box>
  );
};

export default FeedCard;
