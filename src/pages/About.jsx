import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'title',
      headerName: 'Product title',
      width: 320,
    },
    {
      field: 'description',
      headerName: 'Product description',
      width: 480,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 100,
    },
    {
      field: 'category',
      headerName: 'Product category',
      type: 'number',
      width: 170,
    },    
  ];

  
  


const About = () => {
  const[data,setData]=useState([]);


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
   setData(res.data);
  });
  },[]);
console.log(data)

  return (
    <div className='container'>    
      <Box sx={{ height: 400, width: '100%', marginTop: "50px" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  )
}

export default About;


