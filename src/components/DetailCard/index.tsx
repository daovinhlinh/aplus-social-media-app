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
import Options from "../../assets/Icons/Options";

const DetailCard = (props) => {
    return (
        <HStack width={"100%"}>
            <Image
                display="inline"
                src="https://www.w3schools.com/howto/img_avatar.png"
                height={50}
                width={50}
                borderRadius={100}
                marginRight={3}
            />
            <Box textAlign={"start"}>
                <Text color="black" fontWeight="bold" fontSize={"md"}>
                    hello
                </Text>
                <Text color="gray.500" fontSize={"sm"}>
                    hello
                </Text>
            </Box>
            <Spacer />
            <Box alignSelf={"flex-start"}>
                <Options />
            </Box>
        </HStack>
    );
};

export default DetailCard;
