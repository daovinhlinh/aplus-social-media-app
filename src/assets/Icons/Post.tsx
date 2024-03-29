import React from 'react'

const Post = ({ isActive }: { isActive?: boolean }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 6.25V23.75H5V6.25H25ZM25 3.75H5C3.6125 3.75 2.5 4.8625 2.5 6.25V23.75C2.5 25.1375 3.6125 26.25 5 26.25H25C26.3875 26.25 27.5 25.1375 27.5 23.75V6.25C27.5 4.8625 26.3875 3.75 25 3.75ZM22.5 18.75H7.5V21.25H22.5V18.75ZM12.5 8.75H7.5V16.25H12.5V8.75ZM15 11.25H22.5V8.75H15V11.25ZM22.5 13.75H15V16.25H22.5V13.75Z" fill={isActive ? "#CA0101" : "#9D9D9D"} />
    </svg>
  )
}

export default Post