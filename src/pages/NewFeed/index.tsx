import { Box, Text } from "@chakra-ui/react";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import Photo from "../../assets/Icons/Photo";
import Send from "../../assets/Icons/Send";
import FeedCard, { IFeed } from "../../components/FeedCard";
import InputField from "../../components/InputField";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageContainer from "../../components/PageContainer";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";

const NewFeed = () => {
  const [feedList, setFeedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = useRecoilValue(userDataState);
  const [img, setImg] = useState(null);
  const postText = useRef<RefObject<string>>();

  const handlePost = async () => {
    const submitPost = {
      userId: userData._id,
      desc: postText.current,
    };

    if (img) {
      const form = new FormData();
      const fileName = Date.now() + img.name;
      form.append("name", fileName);
      form.append("file", img);
      submitPost["img"] = fileName;

      await axiosClient.post("upload", form);
    }

    if (postText.current) {
      await axiosClient.post("post", submitPost);
      window.location.reload();
    }
  };

  const handleDeletePost = async (id: string) => {
    const deletePostRes = await axiosClient.delete(`post/${id}`, {
      data: {
        userId: userData._id,
      },
    });

    if (deletePostRes.status === 200) {
      const newFeedList = feedList.filter((feed: IFeed) => feed._id !== id);
      setFeedList(newFeedList);
    } else {
      console.log("failed");
    }
  };

  const getFeed = async () => {
    const getFeedRes = await axiosClient.get(`post/timeline/${userData._id}`);
    setFeedList(getFeedRes.data);
  };

  useEffect(() => {
    (async () => {
      if (userData) {
        setLoading(true);
        getFeed();
        setLoading(false);
      }
    })();
  }, [userData]);

  if (loading) {
    return <LoadingSpinner />;
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
                onChange={(text) => {
                  postText.current = text;
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
                      deletePost={() => handleDeletePost(_id)}
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
