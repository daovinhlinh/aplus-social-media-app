import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Share from "../../assets/Icons/Share";
import DetailCard from "../DetailCard";
import InputField from "../InputField";

const FeedCard = () => {
    return (
        <Box width={"100%"} bgColor="#FFF" px="30px" py="20px" borderRadius="15px">
            <DetailCard />
            <Text textAlign={"left"} marginTop={"2"} fontWeight={700}>
                One of the perks of weeking in an international compony is
                sharing knowledge with your colleagues.
            </Text>
            <Flex
                justifyContent="space-between"
                paddingY="3"
                borderY="1px"
                borderColor="gray.300"
                my={4}
                px={4}
            >
                <HStack>
                    <Heart />
                    <Text fontSize={14} fontWeight={600} color="#696969">100 Likes</Text>
                </HStack>
                <HStack>
                    <Comment />
                    <Text fontSize={14} fontWeight={600} color="#696969">100 Comments</Text>
                </HStack>
                <HStack>
                    <Share />
                    <Text fontSize={14} fontWeight={600} color="#696969">100 Comments</Text>
                </HStack>
            </Flex>
            <InputField image="https://www.w3schools.com/howto/img_avatar.png" placeholder="Write your comment..." />
        </Box>
    );
};

export default FeedCard;
