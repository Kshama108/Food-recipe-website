import { Box, Button, Card, Checkbox, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate=useNavigate()
    const [Username, setUsername] = useState("");
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

   

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

       const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const SubmitForm = (e) => {
        e.preventDefault();

        

        console.log('User name',Username);
       
        console.log('Email',Email);
        console.log('Password',Password);
        const SignupData={
          username:Username,
          email:Email,
          password:Password


        };
        localStorage.setItem("SignupData",JSON.stringify(SignupData));
        navigate('/login')
      
      


    };
   
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card sx={{ minWidth:'375px', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, m: 'auto', padding:5, gap: 2}}>
        <Typography sx={{fontSize:35, fontWeight:500, mb:2}}>Sign Up</Typography>
        <TextField id="Username" label="Username" variant="outlined" fullWidth onChange={handleUsername} value={Username} size='small' />
        
        <TextField id="Email" label="email" variant="outlined" fullWidth onChange={handleEmail} value={Email} size='small' />
        <TextField id="password" label="Password" variant="outlined" fullWidth type="password" onChange={handlePassword}  value={Password} size='small'/>
       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Checkbox  size='small' />
          <Typography >I am not a Robot</Typography>
         
        </Box>
        
        <Button onClick={SubmitForm} variant="contained">Sign Up</Button>
        
              
      </Card>
    </Box>
  );
}

  
