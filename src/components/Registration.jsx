import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <Typography variant='h3'>Registration Form</Typography><br/><br/><br/><br/>
        <TextField label="Enter Name" variant="filled"/><br/><br/>
        <TextField label="Enter Email" variant="filled"/><br/><br/>
        <TextField label="Enter Password" variant='filled' type='password'/><br/><br/>
        <TextField label="Confirm Password" variant='filled' type='password'/><br/><br/>
        <Button color='success' variant='contained'>Button</Button>
  </div>
  )
}

export default Registration