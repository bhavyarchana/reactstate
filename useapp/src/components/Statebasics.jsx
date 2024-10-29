import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Statebasics = () => {
    var [name,setname]=useState("levi")
    var [val,setval]=useState()
    const handleInput =(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }
    const click=()=>{
        setval(name)

    }

  return (
    <div><br /><br />
       <Typography variant='h6' >Welcome {val}</Typography>
       <TextField variant='outlined' onChange={handleInput} label='Enter name'/><br /><br />
       <Button variant='contained' onClick={click}>Submit</Button>
    </div>
  );
}

export default Statebasics;
