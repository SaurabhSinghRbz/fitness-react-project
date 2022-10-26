import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box mt="80px" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" flex justifyContent="center">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '220px', margin: "-60px 0" }} />
      </Link>
    </Stack>
    <Typography sx={{ fontSize: { lg: '22px', xs: '20px' } }} pb="22px" textAlign="center" >Made with ❤️ by Saurabh Singh</Typography>
  </Box>
);

export default Footer;