import {
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   Text,
} from "@chakra-ui/react";
import React from "react";
import Home from "../../assets/Icons/Home";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import styles from "./styles.module.scss";

const MainProfile = (props: any) => {
   return (
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
               <Text fontWeight={700} ml="10px" fontSize={14} color="#9D9D9D">
                  Study at HUST
               </Text>
            </TabPanel>
            <TabPanel>
               <Text fontWeight={700} ml="10px" fontSize={14} color="#9D9D9D">
                  Study at HUST
               </Text>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
};

export default MainProfile;
