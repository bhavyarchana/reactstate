import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Display = () => {
    var [name,set] = useState("")
    const pri=()=>{
        set('React')
    }
    const sec=()=>{
        set('Angular')
    }
    const ter=()=>{
        set('vue')
    }
    useEffect(()=>{
        sec()
    },[])
  return (
    <div>
      <Typography variant='h3'>welcome to {name}</Typography>
      <Button variant='contained' onClick={pri} label='Primary'>React</Button>&nbsp;
      <Button variant='contained' onClick={sec} label ='Scondary'>Angular</Button>&nbsp;
      <Button variant='contained' onClick={ter} label='Tertiary'>Next</Button>&nbsp;
    </div>
  );
}

export default Display;
