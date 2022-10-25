import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" flex justifyContent="center" pt="20px">
      <img src={Logo} alt="logo" style={{ width: '200px' }} />
    </Stack>
    <Typography sx={{ fontSize: { lg: '22px', xs: '20px' } }} mt="10px" textAlign="center">Made with ❤️ by Saurabh Singh</Typography>
  </Box>
);

export default Footer;
