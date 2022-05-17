import { Box, Container, Flex } from '@chakra-ui/react'
import { NOTIMP } from 'dns'
import React from 'react'
import Friends from '../../assets/Icons/Friends'
import IconProfile from '../../assets/Icons/IconProfile'
import People from '../../assets/Icons/People'
import Photo from '../../assets/Icons/Photo'
import Post from '../../assets/Icons/Post'
import Video from '../../assets/Icons/Video'
import DetailCard from '../DetailCard'
import FeedCard from '../FeedCard'
import IconCard from '../IconCard'
import Navbar from '../NavBar'
import styles from './styles.module.scss'

const featureList = [
   {
      title: 'Profile',
      icon: <IconProfile />
   },
   {
      title: 'Post',
      icon: <Post />
   },
   {
      title: 'Friends',
      icon: <Friends />
   },
   {
      title: 'Photos',
      icon: <Photo />
   },
   {
      title: 'Videos',
      icon: <Video />
   }
]

const PageContainer = (props: any) => {
   const { children } = props;

   return (
      <Flex className={styles.pagecontainer} width="100%" flexDirection="column">
         <Navbar />
         <Flex width="100%">
            <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="20%" minWidth="300px" px="10px" py="30px" height='92vh'
               overflowY='scroll'
               overflowX='hidden'
               className={styles.feature}
            >
               <Box className={styles.detailcard}><DetailCard/></Box>
               {
                  featureList.map((item) => (
                     <IconCard  label={item.title} leftIcon={item.icon} onClick={() => { }}
                     _hover={{ bg: 'white', color: 'red.500', boxShadow: "base" }
                     }
                     _active={{
                        bg: 'gray.100', color: 'red.500',
                        boxShadow: "base"
                     }}
                     />
                  ))
               }
            </Box>
            <Box width={"50%"} px={10}>
               {children}
            </Box>
            <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="20%" minWidth="300px" px="10px" py="30px" height='92vh'
               overflowY='scroll'
               overflowX='hidden'
               display='none'
               className={styles.feature}
            >
               {
                  featureList.map((item) => (
                     <IconCard label={item.title} leftIcon={item.icon} onClick={() => { }} />
                  ))
               }
            </Box>
         </Flex>
      </Flex>
   )
}

export default PageContainer