import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
        <Spinner  color='red.500'  size='xl' />
    </div>
  )
}

export default Loading