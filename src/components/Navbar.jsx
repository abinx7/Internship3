import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><AppBar>
            <Toolbar>
                <Typography variant='h6'>My App</Typography>
                <Button variant='contained' color='success'><Link to={'login'} style={{textDecoration:"none"}}>Login</Link></Button>
                <Button variant='contained' color='error'><Link to={'signin'} style={{textDecoration:"none"}}>Signup</Link></Button>
            </Toolbar>
        </AppBar></div>
  )
}

export default Navbar