import {
   Box,
   Button,
   Flex,
   Spacer,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import React from "react";
import Home from "../../assets/Icons/Home";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import IconCard from "../IconCard";
import styles from "./styles.module.scss";

const MainProfile = (props: any) => {
   return (
      // <Box width={"100%"}>
      //    <Flex justifyContent="space-between">
      //       <Button width="30%" height={51} background="white" marginLeft={4}>
      //          Personal
      //       </Button>
      //       <Button
      //          width={"30%"}
      //          height={51}
      //          background="white"
      //          className={styles.favourive}
      //       >
      //          Favourive
      //       </Button>
      //       <Button
      //          width={"30%"}
      //          height={51}
      //          background="white"
      //          marginRight={4}
      //       >
      //          Personal
      //       </Button>
      //    </Flex>
      //    <Box
      //       width={"32%"}
      //       height={0}
      //       border={"4px solid #CA0101 "}
      //       marginLeft={2}
      //    ></Box>
      //    <Box width={"100%"} height={0} border={"1px solid #E5E5E5"}></Box>
      //    <Spacer />
      //    <Box
      //       bg="white"
      //       width="20%"
      //       minWidth="300px"
      //       px="10px"
      //       py="30px"
      //       overflowY="scroll"
      //       overflowX="hidden"
      //       className={styles.feature}
      //    >
      //       {featureList.map((item) => (
      //          <IconCard
      //             label={item.title}
      //             leftIcon={item.icon}
      //             onClick={() => {}}
      //             marginTop={4}
      //          />
      //       ))}
      //    </Box>

      //    <Spacer />
      // </Box>

      //Tự custom nốt
      <Tabs isFitted colorScheme="red">
         <TabList style={{ borderBottom: "1px solid #E0DCDC" }}>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
         </TabList>
         <TabPanels>
            <TabPanel>
               <p>one!</p>
            </TabPanel>
            <TabPanel>
               <p>two!</p>
            </TabPanel>
            <TabPanel>
               <p>three!</p>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
};

export default MainProfile;
