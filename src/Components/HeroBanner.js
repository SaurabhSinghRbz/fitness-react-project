import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';
// import BackgoundImage from "../assets/images/2.jpg";
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '50px', xs: '40px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
    <Typography color="#FF2625" fontWeight="600" fontSize="50px" fontFamily="sans-serif">Fitness Club</Typography>
    <Typography fontWeight={400} fontFamily="cursive" sx={{ fontSize: { lg: '35px', xs: '30px' } }} mb="23px" mt="30px">
      Push through the pain...<br />
      Every Single Day
    </Typography>
    <Typography fontSize="20px" fontFamily="cursive" lineHeight="35px">
      Check out the most effective exercises <br />personalized to you...
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '80px', textDecoration: 'none', width: 'fit-content', fontFamily: "sans-serif", textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontFamily="cursive" fontWeight={600} mt="30px" color="#FF2625" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
