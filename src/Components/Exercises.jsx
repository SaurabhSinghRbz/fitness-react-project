import React from 'react';
import Pagination from '@mui/material';
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../UtilityFunction/fetchData";
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises, setExercises, bodyPart }) {
    console.log(exercises)
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">Showing Results</Typography>
            <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    )
}

export default Exercises