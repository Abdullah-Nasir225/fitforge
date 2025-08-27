import * as React from 'react';
import { Typography, CardMedia, Card, Box } from '@mui/material';

export default function TrainerCard({src,trainer,work}) {

  return (
    <Card className=' ' sx={{
      position: 'relative', maxWidth: 300,padding:0,
      borderRight: '6px solid #ffe8beff', cursor: 'pointer', transition: '1',
      '&:hover': {
        borderRightColor: '#FB8942'
      },
      '&:hover .btn1': { background: '#FB8942' },
      '&:hover .btn2': { background: '#222222ff' },
      '&:hover .text1': { color: '#ffffff' },
      '&:hover .text2': { color: '#FB8942' }
    }}>

      <CardMedia
        sx={{ height: 350, padding: 1.5 }}
        image={src}
        title="green iguana"
      />

      <Box className='  btn1 d-flex' sx={{
        Width: '100%', height: '3rem', zIndex: 100,
        background: '#ecececff', p: 1
      }}
      >
        <Typography className='text1' gutterBottom variant="h5" component="div" sx={{  color: '#FB8942', fontWeight: 'bolder' }}>
          {trainer}
        </Typography>
      </Box>
      <Box className='  btn2 d-flex' sx={{
        Width: '70%', height: '1.2rem', zIndex: 100,
        background: '#FB8942', p: 1
      }}
      >
        <Typography className='text2' gutterBottom variant="h6" component="div" sx={{ color: '#ffffff', fontWeight: 'bolder' }}>
          {work}
        </Typography>
      </Box>

    </Card>
  );
}
