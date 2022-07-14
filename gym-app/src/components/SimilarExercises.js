import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', textAlign: 'center' }} fontWeight={700} color="#000" mb="33px">
      <span style={{  textAlign:"center", color: 'black', textTransform: 'capitalize' }}>تمرین های مشابه</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

  </Box>
);

export default SimilarExercises;
