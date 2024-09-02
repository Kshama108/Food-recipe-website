import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useState } from 'react';
import {  Button, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [auth,setAuth]=useState(false);
    const navigate=useNavigate();
    const SignupData = JSON.parse(localStorage.getItem('SignupData')) || {};
    
    console.log(SignupData?.username);
    console.log(SignupData?.password);


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

       const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const SubmitForm = (e) => {
        e.preventDefault();

        

        console.log('Username',Username);
        console.log('password',Password);

        const isAuthenticated = Username ===SignupData?.username && Password===SignupData?.password

        // if( Username===SignupData?.username && Password===SignupData?.password)
        // {
        //   setAuth(true)
        //   localStorage.setItem('Auth',Auth);
        //   navigate('/home')
        // }else{
        //   setAuth(false)
        // }
        console.log('isAuthenticated',isAuthenticated)
        if (isAuthenticated) {
            setAuth(true);
            toast.success('Login successful')
            localStorage.setItem('Auth', isAuthenticated); // Store authentication state as a string
            navigate('/home');
        } else {
            setAuth(false);
            toast.error('Invalid Username or Password')
            console.log('Invalid Username or Password')
            localStorage.setItem('Auth', auth); // Store authentication state as a string
        }
    };
       
      
       

        // localStorage.setItem('Auth',{Username,Password})
      


    
    const handleSignup=()=>{
      navigate('/Signup');
  
  
    }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card sx={{ minWidth:'375px', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, m: 'auto', gap: 2}}>
        <Typography sx={{fontSize:35, fontWeight:500}}>Login</Typography>
        <TextField id="username" label="Username" variant="outlined" fullWidth onChange={handleUsername} value={Username} size='small' />
        <TextField id="password" label="Password" variant="outlined" fullWidth type="password" onChange={handlePassword}  value={Password} size='small'/>
        <Typography sx={{textAlign:'right',width:'100%'}}>
            <a href='/forget-password' style={{textDecoration:'none'}}>Forget Password</a>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox  size='small' />
          <Typography >I am not a Robot</Typography>
         
        </Box>
        
        <Button onClick={SubmitForm} variant="contained">Login</Button>
        <Typography sx={{mt:3, fontWeight:550}}>Or sign up using</Typography>
        <Box sx={{}}>
        <IconButton><Icon icon="devicon:facebook"  fontSize={30} style={{marginRight:15}}/></IconButton>
        <IconButton><Icon icon="devicon:google" fontSize={30} style={{marginRight:15}} /></IconButton>
        <IconButton><Icon icon="logos:twitter" fontSize={30} style={{marginRight:15}}/></IconButton>
        </Box>
        <Typography sx={{mt:2, fontWeight:550}}>Or</Typography>
        <Button onClick={handleSignup} variant="outlined">Sign up</Button>
       
              
      </Card>
      <ToastContainer/>
    </Box>
  );
}
