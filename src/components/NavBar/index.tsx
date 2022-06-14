import { Box, Button, Center, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Logout from "../../assets/Icons/Logout";
import { useNavigate } from "react-router-dom";
import Notification from "../../assets/Icons/Notification";
import Setting from "../../assets/Icons/Setting";
import SearchBar from "../SearchBar";

const Navbar = () => {
   const navigate = useNavigate();

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
         <Box height={66} width={92} onClick={() => navigate("/")}>
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
            <Notification />
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
      </HStack>
   );
};

export default Navbar;
