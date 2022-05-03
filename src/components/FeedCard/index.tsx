import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Share from "../../assets/Icons/Share";
import DetailCard from "../DetailCard";
import InputField from "../InputField";

const FeedCard = () => {
    return (
        <Box width={"100%"}>
            <DetailCard />
            <Text textAlign={"left"} marginTop={"2"}>
                One of the perks of weeking in an international compony is
                sharing knowledge with your colleagues.
            </Text>
            <Flex
                justifyContent="space-between"
                paddingY="15"
                borderY="1px"
                borderColor="gray.300"
                my={4}
                px={4}
            >
                <HStack>
                    <Heart />
                    <Text>100 Likes</Text>
                </HStack>
                <HStack>
                    <Comment />
                    <Text>100 Comments</Text>
                </HStack>
                <HStack>
                    <Share />
                    <Text>100 Comments</Text>
                </HStack>
            </Flex>
            <InputField />
        </Box>
    );
};

export default FeedCard;
