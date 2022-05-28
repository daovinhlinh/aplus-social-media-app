import { Flex, HStack, Box, Image } from "@chakra-ui/react";
import React from "react";
import Options from "../../assets/Icons/Options";
import People from "../../assets/Icons/People";
import CardManager from "../CardManager";
import IconCard from "../IconCard";
import Navbar from "../NavBar";
import styles from "./styles.module.scss";

const featureList = [
   {
      title: "Nguyễn Mạnh Tiến Anh",
      text1: "100",
      text2: "100",
      text3: "100",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon2: <Options />,
   },
   {
      title: "Tung dz",
      text1: "100",
      text2: "100",
      text3: "100",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon2: <Options />,
   },
   {
      title: "Thái Sơn cute",
      text1: "100",
      text2: "100",
      text3: "100",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon2: <Options />,
   },
   {
      title: "Master Linh",
      text1: "100",
      text2: "100",
      text3: "100",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon2: <Options />,
   },
];

const ManagerContainer = () => {
   return (
      <Flex width="100%" flexDirection="column" pt={5}>
         <Flex
            width="100%"
            bgColor="#fff"
            height="50px"
            py="10px"
            px="20px"
            shadow="base"
            borderRadius={10}
         >
            <Box
               width="30%"
               marginLeft={35}
               fontWeight="bold"
               alignItems="center"
            >
               Họ và tên
            </Box>
            <Box width="15%" fontWeight="bold">
               Ngày tạo
            </Box>
            <Box width="15%" fontWeight="bold">
               Bài viết
            </Box>
            <Box width="20%" fontWeight="bold">
               Báo cáo
            </Box>
         </Flex>
         <Box
            width="100%"
            minWidth="300px"
            mt="10px"
            height="92vh"
            overflowY="scroll"
            overflowX="hidden"
            className={styles.feature}
         >
            {featureList.map((item) => (
               <CardManager
                  label={item.title}
                  label1={item.text1}
                  label2={item.text2}
                  label3={item.text3}
                  img={item.img}
                  rightIcon={item.icon2}
                  marginTop="20px"
                  onClick={() => {}}
               />
            ))}
         </Box>
      </Flex>
   );
};

export default ManagerContainer;
