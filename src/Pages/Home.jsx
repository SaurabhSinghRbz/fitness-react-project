import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';

function Home() {
    const [bodyPart, setBodyPart] = React.useState("all")
    const [exercises, setExercises] = React.useState("");
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home