import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import Search from '../../assets/Icons/Search'

const SearchBar = () => {
  return (
    <InputGroup>
      <InputRightElement w={50} children={
        [
          <Search />,
        ]
      } />
      <Input placeholder="Search" paddingRight={50} border="none" backgroundColor="gray.100" />

    </InputGroup>
  )
}

export default SearchBar