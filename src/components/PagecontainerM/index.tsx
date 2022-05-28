import { Box, Container, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import People from '../../assets/Icons/People'
import DetailCard from '../DetailCard'
import FeedCard from '../FeedCard'
import IconCard from '../IconCard'
import Navbar from '../NavBar'
import styles from './styles.module.scss'
import Options from '../../assets/Icons/Options'
import IconProfile from '../../assets/Icons/IconProfile'
import Post from '../../assets/Icons/Post'
import Friends from '../../assets/Icons/Friends'

const detailcards = [
   {
      title1: 'Hồng Anh Amie',
      title2: 'Trap Girl',
      img: <Image
         src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
         height={50}
         width={50}
         borderRadius={100}
         marginRight={3}
      />,
      icon: <Options />
   },
]

const featureList = [
   {
      title: 'User Management',
      icon: <IconProfile />,
   },
   {
      title: 'Post Management',
      icon: <Post />,
   },
   {
      title: 'Reports',
      icon: <Friends />,
   }
]

const PageContainerM = (props: any) => {
   const { children } = props;

   return (

      <Flex width="100%" flexDirection="column" bg='#F7F6F9'>
         <Navbar />
         <Flex width="100%">
            <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="25%" minWidth="300px" px="10px" py="30px" height='92vh'
               overflowY='scroll'
               overflowX='hidden'
               className={styles.feature}
            >
               <HStack className={styles.detailcard} width='100%' >
                  {
                     detailcards.map((item) => (
                        <DetailCard label1={item.title1} label2={item.title2} leftImg={item.img} rightIcon={item.icon} onClick={() => { }}
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
               </HStack>
               {
                  featureList.map((item) => (
                     <IconCard label={item.title} leftIcon={item.icon} onClick={() => { }}
                        _hover={{ bg: 'white', color: 'red.500', boxShadow: "base" }
                        }
                        _active={{
                           bg: 'gray.100', color: 'red.500',
                           boxShadow: "base"
                        }} />

                  ))
               }
            </Box>
            <Box width={"50%"} px={10} flex='1'>
               {children}
            </Box>
         </Flex>
      </Flex>
   )
}

export default PageContainerM