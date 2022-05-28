import {
   Box,
   Container,
   HStack,
   Image,
   Spacer,
   Text,
   VStack,
} from "@chakra-ui/react";
import React from "react";
import ButtonEdit from "../ButtonEdit";
const BackgroundProfile = (props: any) => {
   return (
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
   );
};

export default BackgroundProfile;
