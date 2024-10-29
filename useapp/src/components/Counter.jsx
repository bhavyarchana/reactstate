import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {
     var [count,setcount]=useState(0)
     const add =()=>{
        setcount(count+1)
     }
     const sub=()=>{
        setcount(count-1)
     }
    return (
    <div>
      <Typography variant='h4'>count={count}</Typography><br />
      <Button variant='contained' onClick={add} color='success'>+</Button>
      <Button variant='contained' onClick={sub} color='error'>-</Button>
    </div>
  );
}

export default Counter;
