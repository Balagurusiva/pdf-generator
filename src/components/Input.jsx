import React from 'react'
import {  Box,Stack } from '@mui/material'
import TextField from '@mui/material/TextField';

const Input = ({detailArr, setDetailArr}) => {
  return (
     <Box p='10px' m='10px' width= '50%' borderRight='1px solid gray' height='90vh'>
       <Stack height='inherit'  justifyContent='space-evenly' alignItems='center' >
         <h1 style={{fontWeight:'700', margin:0}}>Enter the details</h1>
         <Stack gap={2}>
             <Stack direction='row' alignItems='center' gap={2} > <label id="label">Enter the name : </label><TextField id="standard-basic" label="Name" variant="standard" /></Stack>
             <Stack direction='row' alignItems='center' gap={2}> <label id='label' >Degree completed : </label><TextField id="standard-basic" label="Degree" variant="standard" /></Stack>
             <Stack direction='row'  alignItems='center' gap={2}> <label  id='label'>course joined: </label><TextField id="standard-basic" label="Course" variant="standard" /></Stack>
             <Stack direction='row'  alignItems='center' gap={2}> <label id='label'>year of passout : </label><TextField id="standard-basic" label="Year" variant="standard" /></Stack>
         </Stack>
          <button style={{width:'50%'}}>Add to pdf</button>
       </Stack>
     </Box>
  )
}

export default Input