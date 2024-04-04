import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [home,setName] = useState()

    const changeName =()=>{
        console.log("clicked")
        setName("To Home")
    }
    const changeName2 =()=>{
        console.log("clicked")
        setName("To Contact")
    }
    const changeName3 =()=>{
        console.log("clicked")
        setName("To Gallery")
    }

    useEffect(()=>{},[
        changeName
    ])

  return (
    <div>
        <Typography variant='h4'>Welcome {home}</Typography><br/><br/>
        <Button variant='contained' color='error' onClick={changeName}>home</Button>&nbsp;
        <Button variant='contained' color='success' onClick={changeName2}>Contact</Button>&nbsp;
        <Button variant='contained' color='warning' onClick={changeName3}>Gallery</Button>&nbsp;
    </div>
  )
}

export default UseE