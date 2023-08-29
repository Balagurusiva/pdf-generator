import React from 'react'
import { Box } from '@mui/material'

const NavBar = () => {
  return (
     <Box 
        style={{
          height:'35px',
            padding:'8px',
            backgroundColor:"#42DB06",
            fontSize:'30px',
            fontStyle:'bold', 
            fontWeight:'700',
            color:'white'}}>
          <p style={{marginTop:'auto'}}>Pdf Generator</p>
    </Box>
  )
}

export default NavBar