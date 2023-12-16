import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchMyApiData } from '../UtilityFunction/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart, search, setSearch, searching, setSearching }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  useEffect(() => {
    setSearch('');
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchMyApiData('exercises');
      } else {
        document.getElementById("exercises").scrollIntoView();
        exercisesData = await fetchMyApiData(`bodyparts/${bodyPart}`);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


  if (!exercises.length && search !== '' && searching === false) {
    return <Box id="exercises" sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }} margin="50px 0">
      <Typography variant="h5" textAlign="center" color="error">No results found for "{search}"</Typography>
      <Typography variant="h5" textAlign="center" color="error">Please search for something else...</Typography>
    </Box>
  }

  if (exercises.length === 0 && searching === false) {
    return <Loader />
  }


  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  let currentExercises = [];
  if (exercises.length > 0) {
    currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  }
  const paginate = (event, value) => {
    setCurrentPage(value);

    document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
  };
  let resultHeading = '';
  if (search !== '') {
    resultHeading = `Search Results for ${search}`;
  } else {
    resultHeading = `Exercises for ${bodyPart}`;
  }




  // if (!currentExercises.length) return <Loader />;

  return (
    <Box>
      {searching ? <Stack justifyContent="center" spacing={2} display="flex" direction="column">
        <Typography textAlign="center"><CircularProgress /></Typography>

        <Typography fontWeight={400} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" fontFamily="sans-serif">
          Searching for {search}...
        </Typography>
      </Stack>
        :
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
          <Typography variant="h4" fontWeight="400" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px" fontFamily="sans-serif">{resultHeading}...</Typography>
          <Stack direction="row" gap="60px 50px" flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="primary"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </Box>}
    </Box>
  );
};

export default Exercises;

