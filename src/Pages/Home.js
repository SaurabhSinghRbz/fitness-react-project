import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Slider from './Slider';
import "swiper/css/bundle";
import "./styles.css";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  return (
    <Box>
      <HeroBanner />
      <Slider />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} search={search} setSearch={setSearch} searching={searching} setSearching={setSearching} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} search={search} setSearch={setSearch} searching={searching} setSearching={setSearching} />
    </Box>
  );
};

export default Home;
