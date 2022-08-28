import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';

function Home() {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    )
}

export default Home