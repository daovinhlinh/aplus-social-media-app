import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import Search from '../../assets/Icons/Search'

const SearchBar = () => {
  return (
    <InputGroup>
      <Input placeholder="Search" />
      <InputRightElement children={<Search />} />
    </InputGroup>
  )
}

export default SearchBar