import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import PhotoCp from "../PhotoCp";

const photocards = Array(10).fill(
   "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
   0
);

const Photoslist = (props: any) => {
   return (
      <Box
         borderRadius={20}
         mt="30px"
         bg="rgba(250, 250, 251, 1)"
         boxShadow="base"
         width="100%"
         minWidth="300px"
         p="20px"
         textAlign="center"
      >
         <Text color="black" fontWeight="600" fontSize="30px" mb="10px">
            Photos
         </Text>
         <SimpleGrid columns={4} minChildWidth="20%" spacing={5}>
            {photocards.map((item) => (
               <PhotoCp
                  imgSrc={item}
                  onClick={() => {}}
                  width="100%"
                  border="1px solid #E5E5E5"
                  borderRadius={15}
               />
            ))}
         </SimpleGrid>
      </Box>
   );
};

export default Photoslist;
