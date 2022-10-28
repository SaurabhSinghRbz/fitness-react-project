import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: '80px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      {!exerciseVideos.length ? <Loader /> : (
        <Stack direction="row" gap="50px" flexWrap="wrap" justifyContent="center">
          {exerciseVideos?.slice(0, 9)?.map((item, index) => (
            <Box key={index} className="exercise-video">
              <iframe width="100%" height="200px" style={{ borderRadius: "15px 0 0 0" }} title="YouTube video player" src={`https://www.youtube.com/embed/${item.video.videoId}`} allowFullScreen />
              <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} fontWeight={700} fontFamily="cursive" color="#000">
                  {item.video.title}
                </Typography>
              </a>
              <a href={`https://www.youtube.com/channel/${item.video.channelId}`} target="_blank" rel="noreferrer">
                <Typography fontSize="15px" color="#000" fontFamily="monospace" fontWeight="400">
                  {item.video.channelName}
                </Typography>
              </a>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ExerciseVideos;
