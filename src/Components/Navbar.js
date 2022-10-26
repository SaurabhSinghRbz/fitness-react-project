import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return <Stack direction="row" alignContent="center" sx={{ gap: { sm: '50px', xs: "20px" }, justifyContent: 'left', pl: { xs: "5px", sm: "20px" } }} pl="40px" mt="0">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '110px', margin: '0px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="sans-serif"
      fontSize="25px"
      fontWeight="bold"
      alignItems="center"
      sx={{ fontSize: { xs: "22px", sm: "25px" }, }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#FF2625', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack >
};

export default Navbar;
