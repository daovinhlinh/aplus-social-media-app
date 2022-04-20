import { Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/NavBar'
import styles from './styles.module.scss'

const NewFeed = () => {
  return (
    <div className={styles.container}>
      <Flex>
        <Navbar />
      </Flex>
    </div>
  )
}

export default NewFeed