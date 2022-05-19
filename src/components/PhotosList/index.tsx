import {
    Box,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
    Button,
    Flex,
    Img,
} from "@chakra-ui/react";
import React from "react";
import Home from "../../assets/Icons/Home";
import Options from "../../assets/Icons/Options";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import WhiteOptions from "../../assets/Icons/WhiteOptions";
import ButtonEdit from "../ButtonEdit";
import DetailCard from "../DetailCard";
import IconCard from "../IconCard";
import PhotoCp from "../PhotoCp";
import styles from "./styles.module.scss";



const photocards = [
    {
       img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
        />,
       icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    },
    {
        img: <Image 
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            width='100%'
            borderRadius={5}
         />,
        icon: <WhiteOptions/>
    }
]

const Photoslist = (props :any) => {
    return (
        <Flex className={styles.photoslist} width="100%" flexDirection="row" >
            <HStack width="100%" marginTop={10} borderRadius = {20}>
                
                <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="100%" minWidth="300px" px="10px" py="30px"
                    className={styles.PhotosCard}
        
                    >
                    <Box width = '100%' marginBottom={8}>
                        <Text color="black" fontWeight="600" fontSize={"30"}
                            font-family = "Inter"
                            font-style = "normal"
                        >
                            Photos
                        </Text>
                    </Box>
                    {
                        photocards.map((item) => (
                            <PhotoCp leftImg={item.img} rightIcon={item.icon} onClick={() => { }}
                            _hover={{ bg: 'white', color: 'red.500', boxShadow: "base" }
                            }
                            _active={{
                                bg: 'gray.100',
                                boxShadow: "base"
                            }}
                            width= '20%' marginLeft = {8} marginBottom = {8} border = '1px solid #E5E5E5' borderRadius = {10}
                            />
                        ))
                    }
                </Box>
            </HStack>
      </Flex>
    );
};

export default Photoslist;
