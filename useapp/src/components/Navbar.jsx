import { AppBar, Button, Toolbar, Typography, } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h6'>APP_3.0 </Typography>&nbsp;
            <Link to='/s'>
            <Button variant='contained'>state</Button>
            </Link><br />
            <Link to='/c'>
            <Button variant='contained'>state</Button>
            </Link>
            <Link to='/n'>
            <Button variant='contained'>Name</Button>
            </Link>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  );
}

export default Navbar;
