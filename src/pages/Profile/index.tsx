import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "../../assets/Icons/Home";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import ButtonEdit from "../../components/ButtonEdit";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";
import React from "react";
import { axiosClient } from "../../utils/axiosClient";
import { UserData } from "../../store/user";
import LoadingSpinner from "../../components/LoadingSpinner";
import DetailCard from "../../components/DetailCard";
import CustomButton from "../../components/CustomButton";
import Pen from "../../assets/Icons/Pen";

const Profile = () => {
  const [userData, setUserData] = useState<UserData>(null);
  const [following, setFollowing] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const imgFolder = import.meta.env.VITE_CDN_URL;

  const fetchFollowing = async (userId) => {
    const fetchFollowingRes = await axiosClient.get(
      `user/followings/${userId}`
    );
    setFollowing(fetchFollowingRes.data);
  };

  const fetchFriends = async (userId) => {
    const getFriendRes = await axiosClient.get(`/user/friends/${userId}`);
    setFriends(getFriendRes.data);
  };

  const fetchUserData = async () => {
    const fetchUserRes = await axiosClient.get(`/user?username=${id}`);
    return fetchUserRes.data;
  };

  useEffect(() => {
    (async () => {
      const userProfile = await fetchUserData();
      await fetchFollowing(userProfile._id);
      await fetchFriends(userProfile._id);
      setUserData(userProfile);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

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
              height="100%"
            >
              <Image
                src={`${imgFolder}${
                  userData.background ?? "person/noCover.png"
                }`}
                onError={(e) =>
                  (e.target.src = `${imgFolder}person/noCover.png`)
                }
                width={"100%"}
              />
              <Box
                position="absolute"
                bottom="0"
                backgroundColor="#fff"
                w="100%"
                height="30%"
                display="flex"
                px={30}
              >
                {userData.avatar && (
                  <Image
                    src={`${imgFolder}${userData.avatar}`}
                    height={150}
                    width={150}
                    borderRadius={"50%"}
                    left={30}
                    top="-75px"
                    position={"absolute"}
                  />
                )}
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
                      {userData.username}
                    </Text>
                    <Text color="gray.500" fontSize={"16"}>
                      {userData.email}
                    </Text>
                  </Box>
                  <CustomButton
                    leftIcon={<Pen />}
                    colorScheme="green"
                    onClick={() => {}}
                  >
                    <Text>Edit Profile</Text>
                  </CustomButton>
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
                <Tab className={styles.tab}>User information</Tab>
                <Tab className={styles.tab}>Friends</Tab>
                <Tab className={styles.tab}>Following</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Flex flexDirection="column" alignItems="flex-start">
                    <Flex alignItems="center" mb="20px">
                      <Home />
                      <Text
                        fontWeight={700}
                        ml="10px"
                        fontSize={14}
                        color="#9D9D9D"
                      >
                        Live at {userData.city}
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
                        Study at {userData.from}
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <SimpleGrid columns={3} minChildWidth="30%" spacing="20px">
                    {friends.map((item) => (
                      <Link to={`/profile/${item.username}`}>
                        <DetailCard
                          key={item._id}
                          label2={item.username}
                          imgSize={35}
                          leftImg={`${imgFolder}${item.avatar}`}
                          // rightIcon={<Options />}
                          onClick={() => navigate(`/profile/${item.username}`)}
                          width={friends.length > 1 ? "100%" : "30%"}
                          border="1px solid #E5E5E5"
                          borderRadius={15}
                          alignItems="center"
                          padding="5px"
                        />
                      </Link>
                    ))}
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <SimpleGrid columns={3} minChildWidth="30%" spacing="20px">
                    {following.map((item) => (
                      <Link to={`/profile/${item.username}`}>
                        <DetailCard
                          key={item._id}
                          label2={item.username}
                          imgSize={35}
                          leftImg={`${imgFolder}${item.avatar}`}
                          width={following.length > 1 ? "100%" : "30%"}
                          border="1px solid #E5E5E5"
                          borderRadius={15}
                          alignItems="center"
                          padding="5px"
                        />
                      </Link>
                    ))}
                  </SimpleGrid>
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
