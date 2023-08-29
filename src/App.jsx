 import React, { useState } from 'react'
 import Input from './components/Input'
 import NavBar from './components/NavBar'
 import PdfGenerator from  './components/PdfGenerator'
 import { Stack ,Divider} from '@mui/material'
 import './index.css'
 const App = () => {

   const[detailsArr, setDetailsArr] = useState([]);

   return (
      <Stack>
        <NavBar />
        <Stack direction='row' >
        <Input  detailsArr={detailsArr} setDetailsArr={setDetailsArr} />
        <PdfGenerator /> 
     </Stack>
      </Stack>
   )
 }
 
 export default App