import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import People from '../../assets/Icons/People'
import FeedCard from '../FeedCard'
import IconCard from '../IconCard'
import Navbar from '../NavBar'
import styles from './styles.module.scss'

const featureList = [
   {
      title: 'Feed',
      icon: <People />
   },
   {
      title: 'Feed1',
      icon: <People />
   },
   {
      title: 'Feed2',
      icon: <People />
   }
]

const PageContainer = (props: any) => {
   const { children } = props;

   return (
      <Flex width="100%" flexDirection="column">
         <Navbar />
         <Flex width="100%">
            <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="25%" minWidth="300px" px="10px" py="30px" height='92vh'
               overflowY='scroll'
               overflowX='hidden'
               className={styles.feature}
            >
               {
                  featureList.map((item) => (
                     <IconCard label={item.title} leftIcon={item.icon} onClick={() => { }} />
                  ))
               }
            </Box>
            <Box width={"50%"} px={10}>
               {children}
            </Box>
            <Box bg="rgba(250, 250, 251, 1)" boxShadow='base' width="25%" minWidth="300px" px="10px" py="30px" height='92vh'
               overflowY='scroll'
               overflowX='hidden'
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