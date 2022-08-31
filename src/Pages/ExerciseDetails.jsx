import React from 'react'
import { Box } from "@mui/material"
import { useParam } from "react-router-dom"

import { exerciseOptions, fetchData } from "../UtilityFunction/fetchData"
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'

function ExerciseDetails() {
    const [exerciseDetail, setExerciseDetail] = React.useState({});
    // const { id } = useParam();

    // React.useEffect(() => {
    //     const fetchExerciseData = async () => {

    //     }
    //     fetchExerciseData();
    // }, [id])
    return (
        <Box>
            <Detail />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetails