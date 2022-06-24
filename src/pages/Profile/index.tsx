import {
  Box,
  Flex,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "../../assets/Icons/Home";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import ButtonEdit from "../../components/ButtonEdit";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";

const Profile = () => {
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id != null) {
    }
  }, []);

  return (
    <div className={styles.profile}>
      <PageContainer page="Profile">
        <Box>
          <div className={styles.backgroundprofile}>
            <Box
              width={"100%"}
              borderRadius={20}
              position="relative"
              overflow="hidden"
              backgroundImage="url('https://i.imgur.com/h6410NB.png')"
              height="100%"
            >
              <Image src="https://i.imgur.com/h6410NB.png" width={"100%"} />
              <Box
                position="absolute"
                bottom="0"
                backgroundColor="#fff"
                w="100%"
                height="30%"
                display="flex"
                px={30}
              >
                <Image
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  height={150}
                  width={150}
                  borderRadius={"50%"}
                  left={30}
                  top="-75px"
                  position={"absolute"}
                />
                <Box
                  ml="170px"
                  mt={2}
                  flex={1}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Text color="black" fontWeight="600" fontSize={"24"}>
                      Dao Vinh Linh
                    </Text>
                    <Text color="gray.500" fontSize={"16"}>
                      Description
                    </Text>
                  </Box>
                  <ButtonEdit />
                </Box>
              </Box>
              <Spacer />
            </Box>
          </div>
        </Box>
        <Box>
          <div className={styles.mainprofile}>
            <Tabs isFitted colorScheme="red">
              <TabList style={{ borderBottom: "1px solid #E0DCDC" }}>
                <Tab className={styles.tab}>Personal</Tab>
                <Tab className={styles.tab}>Favourite</Tab>
                <Tab className={styles.tab}>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Flex flexDirection="column" alignItems="flex-start">
                    <Flex alignItems="center" mb="20px">
                      <Study />
                      <Text
                        ml="10px"
                        fontWeight={700}
                        fontSize={14}
                        color="#9D9D9D"
                      >
                        Study at HUST
                      </Text>
                    </Flex>
                    <Flex alignItems="center" mb="20px">
                      <Home />
                      <Text
                        fontWeight={700}
                        ml="10px"
                        fontSize={14}
                        color="#9D9D9D"
                      >
                        Study at HUST
                      </Text>
                    </Flex>
                    <Flex alignItems="center" mb="20px">
                      <Place />
                      <Text
                        fontWeight={700}
                        ml="10px"
                        fontSize={14}
                        color="#9D9D9D"
                      >
                        Study at HUST
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Text
                    fontWeight={700}
                    ml="10px"
                    fontSize={14}
                    color="#9D9D9D"
                  >
                    Study at HUST
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text
                    fontWeight={700}
                    ml="10px"
                    fontSize={14}
                    color="#9D9D9D"
                  >
                    Study at HUST
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </Box>
      </PageContainer>
    </div>
  );
};

export default Profile;
