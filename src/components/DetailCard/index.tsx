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

const DetailCard = (props :any) => {
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
                    Đào Vĩnh Ling
                </Text>
                <Text color="gray.500" fontSize={"sm"}>
                    Buck Foiz
                </Text>
            </Box>
            <Spacer />
            <Box alignSelf={"flex-start"}>
            </Box>
        </HStack>
    );
};

export default DetailCard;
