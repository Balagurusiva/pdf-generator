import React from 'react';
import { Page, Text, Document,View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding:'10px',
    width:'100%'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border:'2px solid black',
  },
  doc:{
    window:'100%',
    height:'400px'
  }
});
 

// Create Document Component
const MyDocument = ({detailArr}) => {
     
     return(
            <Document style={styles.doc}>
                 <Page size="A4" style={styles.page} wrap>
                    <View style={styles.section}>
                       {detailArr.map((item, index) => (
                       <div key={index}>
                        {Object.entries(item).map(([key, value]) => (
                        <Text key={key}>
                         {key}: {value}</Text>
          ))}
        </div>
      ))}
                      
                      </View> 
                 </Page>
            </Document>
          )
};

export default MyDocument