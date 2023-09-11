import React from 'react'
import MyDocument from './MyDocument'
import { Stack ,Box} from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';
import {PDFDownloadLink} from '@react-pdf/renderer';
const PdfGenerator = ({detailsArr}) => {
 
 const path ='D:\Desktop'

  return (
       <Box p='10px' m='10px' width= '50%' height='90vh'>
              <Stack height='inherit'  justifyContent='space-evenly' alignItems='center' >
                 <h1  style={{fontWeight:'700', margin:0}}>PDF</h1>
                 <Stack>
                       <PDFViewer width='300px' height='280px'>
                        <MyDocument detailArr={detailsArr}/>
                       </PDFViewer>
                 </Stack>
                 <button >Downloud</button>
              </Stack>
       </Box>
  )
}

export default PdfGenerator