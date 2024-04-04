import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var fname="Joseph"
    var [name,setName] = useState("")
    var [value,setValue] = useState()
    const changeName =()=>{
        console.log("clicked")
        setName(value)
    }

     const inputHandler = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
     }
  return (
    <div>
        <Typography variant='h4'>Welcome {name}</Typography>
        <TextField label="Enter Name" onChange={inputHandler}/><br /><br />
        <Button variant='contained' color='success' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics