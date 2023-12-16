import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useToasts } from 'react-toast-notifications';
import { fetchMyApiData } from '../UtilityFunction/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart, search, setSearch, searching, setSearching }) => {
  const [bodyParts, setBodyParts] = useState([]);
  const { addToast } = useToasts();
  const [errorMessages, setErrorMessages] = useState("");


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchMyApiData('bodyparts')
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = (e) => {
    if (search === '') {
      addToast("Please enter a search term", { appearance: 'error' });
      return;
    }
    setSearching(true);
    document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
    setTimeout(async () => {
      if (search) {
        const exercisesData = await fetchMyApiData(`exercises`)
        setSearching(false);
        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),
        );
        setExercises(searchedExercises);
      }
    }, 1000);

  };


  setTimeout(() => {
    if (bodyParts.length === 0) {
      setErrorMessages(<Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
        <Typography variant="h6" color="error">Unable to fetch data, API is not working...</Typography>
        <Typography variant="h6" color="error">Please contact the developer, or try again later...</Typography>
        <Typography variant="h6" color="error">Github: <a href="https://github.com/SaurabhSinghRbz" target="_blank" rel="noreferrer">SaurabhSinghRbz</a></Typography>
        <Typography variant="h6" color="error">LinkedIn: <a href="https://www.linkedin.com/in/saurabh-singh-rbz1602/" target="_blank" rel="noreferrer">Saurabh Singh</a></Typography>
      </Box>);
    }
  }, 15000);


  return (
    <Stack alignItems="center" mt="50px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" fontFamily="sans-serif">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box mb="72px" width="100vw" display="flex" justifyContent="center" >
        <TextField
          height="80px"
          sx={{ input: { fontWeight: '600', minLength: "3", width: { xs: "60vw", ms: "70vw" } }, backgroundColor: '#fff' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="search"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { xs: "25vw", ms: "18vw", lg: "15vw" }, height: '56px', border: "1px solid red", fontSize: { lg: '20px', xs: '14px' }, borderRadius: '0 30px 30px 0', }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {bodyParts.length === 0 ? (
          <Typography sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" fontFamily="sans-serif">
            {errorMessages ? errorMessages : <Loader />}
          </Typography>
        ) : (
          <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
        )}
      </Box>
    </Stack>
  );
};

export default SearchExercises;
