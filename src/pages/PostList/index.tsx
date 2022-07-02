import { Box } from "@chakra-ui/react";
import React from "react";
import PageContainer from "../../components/PageContainer";
import Postlist from "../../components/Postlist";
import styles from "./styles.module.scss";

const PostList = () => {
  return (
    <div className={styles.profile}>
      <PageContainer page="Post">
        <Box className={styles.backgroundprofile}>
          {/* <BackgroundProfile /> */}
        </Box>
        <Box className={styles.friendslist}>{/* <Postlist /> */}</Box>
      </PageContainer>
    </div>
  );
};

export default PostList;
