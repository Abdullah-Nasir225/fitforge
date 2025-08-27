import React from 'react'
import spinner from '../assests/img/world.gif';
import { Box } from '@mui/material';

export default function Spinner() {
    return (
        <div>
            <Box
                component='img'
                src={spinner}
                alt='spinner'
                sx={{
                    position: 'fixed', height: '3rem', left: 0, borderTopRightRadius: '5px', zIndex: '1001',
                    borderBottomRightRadius: '5px', top: { xs: '35%', sm: '25%', md: '27%', lg: '53%', xl: '53%' },
                    background: '#FB8942'
                }}
            >
            </Box>
        </div>
    )
}
