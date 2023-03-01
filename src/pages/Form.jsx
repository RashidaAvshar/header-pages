import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import swal from 'sweetalert';

const Form = () => {
  const[userData, setUserData] = useState({
    name: "",
    surname: "",
    password: "",
  });
  const onHandleChange = (e) =>{
    setUserData({...userData, [e.target.name]: e.target.value})
  }


  const onHandleClick = ()=>{
    axios.post(`${BASE_URL}/create-data`, userData).then((res)=>{
      if(res.status === 201){
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "Welcome!",
        });
      }

    })
  }
  const {name,surname, password} = userData;
  return (
    <div className='container'>
      <div className="form-box">
        <div className="form">
          <h1>REGISTER</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" onChange={onHandleChange} name="name" />
          <TextField id="outlined-basic" label="Surname" variant="outlined" onChange={onHandleChange} name="surname"/>
          <TextField type={'password'} id="outlined-basic" label="Password" variant="outlined" onChange={onHandleChange} name="password"/>      
          <Button variant="contained" color="success" onClick={onHandleClick} disabled={(userData.name == "" || userData.surname == "" || userData.password.length <=8)}>  register</Button>       
 </div>
      </div>      
    </div>
  )
}

export default Form;
