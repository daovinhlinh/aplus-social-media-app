import {Flex, HStack, Box} from '@chakra-ui/react'
import React from 'react'
import Options from '../../assets/Icons/Options';
import People from '../../assets/Icons/People';
import CardManager from '../CardManager';
import IconCard from '../IconCard';
import Navbar from '../NavBar';
import styles from './styles.module.scss'

const featureList = [
    {
       title: 'Feed',
       text1: '100',
       text2: '100',
       text3: '100',
       icon: <People />,
       icon2: <Options/>
    },
    {
       title: 'Feed1',
       text1: '100',
       text2: '100',
       text3: '100',
       icon: <People />,
       icon2: <Options/>  
       
    },
    {
       title: 'Feed2',
       text1: '100',
       text2: '100',
       text3: '100',
       icon: <People />,
       icon2: <Options/>
    },
    {
       title: 'Feed3',
       text1: '100',
       text2: '100',
       text3: '100',
       icon: <People />,
       icon2: <Options/>
    },
    {
       title: 'Feed4',
       text1: '100',
       text2: '100',
       text3: '100',
       icon: <People />,
       icon2: <Options/>
    }
 ]
 
 const ManagerContainer = () => {
    return (
       <Flex width="100%" flexDirection="column" pt={5}>
          
            <Box bg="#F7F6F9" width="100%" minWidth="300px"  py="30px" height='92vh'
                overflowY='scroll'
                overflowX='hidden'
                className={styles.feature}
            >
               <HStack width="100%" justifyContent="space-between" alignItems="center" bgColor="#fff" height="8vh" py="10px" px="20px" shadow="base">
            
               </HStack>
               {
                   featureList.map((item) => (
                      <CardManager  label={item.title} label1={item.text1} label2={item.text2} label3={item.text3} leftIcon={item.icon} rightIcon={item.icon2} marginTop = {5} onClick={() => { }} />
                   ))
               }
            </Box>
             
          
       </Flex>
    )
 }

export default ManagerContainer;