import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Options from "../../assets/Icons/Options";
import DetailCard from "../DetailCard";

const detailcards = [
   {
      title1: "Dao vinh ling",
      title2: "buck foiz",
      img: "https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296",
   },
   {
      title1: "Bui Tung Anh",
      title2: "Thơ nụ",
      img: "https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296",
   },
   {
      title1: "Đỗ Thái Sơn",
      title2: "Kiểm Lâm",
      img: "https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296",
   },
   {
      title1: "Hồng Anh Amie",
      title2: "Thủy Quân Lục Túi",
      img: "https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296",
   },
   {
      title1: "Đỗ Thái Sơn",
      title2: "Kiểm Lâm",
      img: "https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296",
   },
];

const Friendslist = (props: any) => {
   return (
      <Box
         borderRadius={20}
         mt="30px"
         bg="rgba(250, 250, 251, 1)"
         boxShadow="base"
         width="100%"
         minWidth="300px"
         p="20px"
      >
         <Text color="black" fontWeight="600" fontSize="30px" mb="10px">
            Friends
         </Text>
         <SimpleGrid columns={2} minChildWidth="45%" spacing="20px">
            {detailcards.map((item) => (
               <DetailCard
                  label2={item.title2}
                  label1={item.title1}
                  leftImg={
                     <Image
                        src={item.img}
                        h="70px"
                        w="70px"
                        borderRadius="10px"
                     />
                  }
                  rightIcon={<Options />}
                  onClick={() => {}}
                  width="100%"
                  border="1px solid #E5E5E5"
                  borderRadius={15}
                  alignItems="center"
               />
            ))}
         </SimpleGrid>
      </Box>
   );
};

export default Friendslist;
