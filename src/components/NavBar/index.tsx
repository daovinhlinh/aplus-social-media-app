import { Box, Center, HStack } from "@chakra-ui/react";
import React from "react";
import Logout from "../../assets/Icons/Logout";
import Notification from "../../assets/Icons/Notification";
import Setting from "../../assets/Icons/Setting";
import SearchBar from "../SearchBar";

const Navbar = () => {
    return (
        <HStack width="100%" justifyContent="space-between" alignItems="center">
            <Setting />
            <Center minWidth="50%">
                <SearchBar />
            </Center>
            <HStack spacing="30px">
                <Setting />
                <Notification />
                <Logout />
            </HStack>
        </HStack>
    );
};

export default Navbar;
