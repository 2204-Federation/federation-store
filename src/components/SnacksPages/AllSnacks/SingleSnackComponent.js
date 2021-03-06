import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const SingleSnackComponent = ({ snack }) => {
  return (
    <Link to={`/allsnacks/${snack.id}`}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '25px',
          margin: '20px',
          height: '80%',
        }}
      >
        <CardMedia
          component='img'
          sx={{ width: 200, objectFit: 'contain' }}
          image={snack.photoURL}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h6'>
              {snack.name}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {snack.cat.type}
            </Typography>
            <Typography component='div' variant='h6'>
              $$ : {snack.price}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Link>
  );
};

export default SingleSnackComponent;
