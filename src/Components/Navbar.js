import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo4.png';

const Navbar = () => {
  return <Stack direction="row" alignContent="center" sx={{ gap: { sm: '100px', xs: '20px' }, justifyContent: { xs: "space-around", sm: "left" }, pl: { xs: "0", sm: "20px" } }} pl="40px" mt="0">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '120px', margin: '0px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <Link to="/exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises</Link>
      {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
    </Stack>
  </Stack>
};

export default Navbar;
