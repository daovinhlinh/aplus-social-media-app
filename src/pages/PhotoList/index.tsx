import { Box } from "@chakra-ui/react";
import PageContainer from "../../components/PageContainer";
import Photoslist from "../../components/PhotosList";
import styles from "./styles.module.scss";

const PhotoList = () => {
  return (
    <div className={styles.profile}>
      <PageContainer page="Photos">
        <Box className={styles.backgroundprofile}>
          {/* <BackgroundProfile /> */}
        </Box>
        <Box className={styles.friendslist}>
          <Photoslist />
        </Box>
      </PageContainer>
    </div>
  );
};

export default PhotoList;
