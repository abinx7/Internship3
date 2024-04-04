import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return ( 
    <div style={{marginTop:"80px"}}>
    <Typography variant='h3'>Login Page</Typography><br/><br/>
    {/* <input type="text" placeholder='Enter name'/><br/> */}
    {/* <input type="password" placeholder='Enter Password'/><br/><br/><br/> */}
    <TextField label="Enter Name" variant='filled'/><br/>
    <TextField type="password" label="Enter Password" variant='filled'/><br/><br/>
    <Button color="success" variant='contained'>Button</Button>
    </div>
  )
}

export default Login