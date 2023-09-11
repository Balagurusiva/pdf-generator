import React from 'react'
import { Text } from '@react-pdf/renderer'
const MyText = ({key, value}) => {
  return (
    <div>
       <Text><strong>{key}:</strong>{value} hello</Text> 
    </div>
  )
}

export default MyText