import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function TextRating() {
    const value = 5;

    return (
        <Box sx={{ width: 200, display: 'flex',justifyContent:'center',marginTop:'1rem',marginBottom:'1rem' }}>
            <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Box>
    );
}
