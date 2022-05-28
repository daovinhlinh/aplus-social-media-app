import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SocketContext } from '../../utils/SocketContext'

const VideoPlayer = () => {
  const { myVideo, name, callAccepted, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Grid templateColumns='repeat(2, 2fr)' gap={10}>
      {/* userVideo */}
      {
        stream &&
        <GridItem bg='blue.500'>
          <Text>{name || 'name'}
          </Text>
          <video playsInline muted ref={myVideo} autoPlay width={'500px'} />
        </GridItem>
      }
      {/* Guest video */}

      {
        callAccepted && !callEnded &&
        <GridItem bg='teal.500'>
          <Text>
            {call.name || 'name'}
          </Text>
          <video playsInline muted ref={userVideo} autoPlay />
        </GridItem>
      }
    </Grid >
  )
}

export default VideoPlayer