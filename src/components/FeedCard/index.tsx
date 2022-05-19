import { Box, Container, Flex, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import Comment from "../../assets/Icons/Comment";
import Heart from "../../assets/Icons/Heart";
import Options from "../../assets/Icons/Options";
import Share from "../../assets/Icons/Share";
import DetailCard from "../DetailCard";
import InputField from "../InputField";
import styles from './styles.module.scss'


const detailcards = [
    {
       title1: 'Dao vinh ling',
       title2: 'buck foiz',
       img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight = {3}
        />,
       icon: <Options/>
    },
]
const FeedCard = () => {
    return (
        <Box width={"100%"} bgColor="#FFF" px="30px" py="20px" borderRadius="15px">
            <Box className={styles.detailcard}>
                  {
                     detailcards.map((item) => (
                        <DetailCard label1={item.title1} label2 = {item.title2} leftImg = {item.img} rightIcon = {item.icon} onClick={() => { }}
                        _hover={{ bg: 'white', color: 'red.500', boxShadow: "base" }
                        }
                        _active={{
                           bg: 'gray.100', color: 'red.500',
                           boxShadow: "base"
                        }}
                        />
                     )
                     )
                  }
               </Box>
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
