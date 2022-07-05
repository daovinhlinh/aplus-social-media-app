import { Box, Button, Center, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Logout from "../../assets/Icons/Logout";
import { useNavigate } from "react-router-dom";
import Notification from "../../assets/Icons/Notification";
import Setting from "../../assets/Icons/Setting";
import SearchBar from "../SearchBar";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Alam from "../../assets/Icons/Alam";
import Options from "../../assets/Icons/Options";

const Navbar = () => {
   const navigate = useNavigate();
   const [show,setShow]=useState(true)

   const logout = () => {
      localStorage.clear();
      navigate("/login");
   };



   return (
      <HStack
         width="100%"
         justifyContent="space-between"
         alignItems="center"
         bgColor="#fff"
         height="8vh"
         py="10px"
         px="20px"
      >
         <Box
            height={66}
            width={92}
            cursor="pointer"
            onClick={() => navigate("/")}
         >
            <Image
               src="https://i.imgur.com/udioN9R.png"
               width="100%"
               borderRadius="50%"
               marginLeft={8}
            />
         </Box>
         <Center minWidth="30%">
            <SearchBar />
         </Center>
         <HStack spacing="30px">
            <Setting />
            <Box 
               onClick={() => setShow(!show)}
            >
               <Notification />
            </Box>
            <Button
               bg="transparent"
               variant="unstyled"
               _expanded={{ boxShadow: "none" }}
               _focus={{ boxShadow: "none" }}
               onClick={logout}
            >
               <Logout />
            </Button>

         </HStack>
         {show&&<Box position={"fixed"} width={"20%"} height={"88vh"} backgroundColor={"white"} right={10} top={"8vh"} zIndex={10}           
            overflowY="scroll"
            overflowX="hidden"
            margin="auto 0"
            boxShadow="base"
            borderRadius={10}
            bg="rgba(250, 250, 251, 1)"
           
         >
            <Box width={"100%"} boxShadow="base" borderRadius={8} >
                  <Box display="flex" 
                     py="10px" 
                     marginBottom={2}
                     _hover={{
                     bg: "white",
                     color: "red.500",
                     boxShadow: "base",
                     }}
                     _active={{
                     bg: "gray.300",
                     color: "red.500",
                     boxShadow: "base",
                     }}
                  >
                     <Alam/>
                     <Box textAlign={"start"} paddingLeft={8}>
                        <Text color="black" fontWeight="bold" fontSize={"sm"}>
                           Bạn có thông báo mới
                        </Text>
                        <Text color="black" fontSize={"md"}>
                           Bạn có thông báo mới
                        </Text>
                     </Box>
                     <Box position={"absolute"} right={4}>
                        <Options/>
                     </Box>
                  </Box>
            </Box>
            <Box width={"100%"} boxShadow="base" borderRadius={8}>
                  <Box display="flex"  
                     py="10px" 
                     _hover={{
                     bg: "white",
                     color: "red.500",
                     boxShadow: "base",
                     }}
                     _active={{
                     bg: "white",
                     color: "red.500",
                     boxShadow: "base",
                     }}
                  >
                     <Alam/>
                     <Box textAlign={"start"} paddingLeft={8}>
                        <Text color="black" fontWeight="bold" fontSize={"sm"}>
                           Bạn có thông báo mới
                        </Text>
                        <Text color="black" fontSize={"md"}>
                           Bạn có thông báo mới
                        </Text>
                     </Box>
                     <Box position={"absolute"} right={4}>
                        <Options/>
                     </Box>
                  </Box>
            </Box>
         </Box>}
      </HStack>
   );
};

export default Navbar;
