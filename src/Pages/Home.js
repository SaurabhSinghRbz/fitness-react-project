import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [search, setSearch] = useState('');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} search={search} setSearch={setSearch} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} search={search} setSearch={setSearch} />
    </Box>
  );
};

export default Home;
