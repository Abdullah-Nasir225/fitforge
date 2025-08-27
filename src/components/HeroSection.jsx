import React from 'react'
import Spinner from '../components/Spinner';
import { TextField, Button, Typography, Grid, Container, Box } from '@mui/material';
import about from '../assests/img/back2.png';

const HeroSection = ({ text, value }) => {
    return (
        <div>
            <Container disableGutters maxWidth={false} sx={{
                backgroundImage: `url(${about})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                p:2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Spinner />
                {/* <Box
                    component='img'
                    src={about}
                    alt='about-img'
                    sx={{ position: 'absolute', top: 0, left: 0, height: { lg: '70dvh', xl: '70dvh', md: '30dvh', sm: '30dvh', xs: '42dvh' }, width: '100%', zIndex: -1 }}
                >
                </Box> */}
                <Box>
                    <Container className=' '>
                        <Box className="large-sep "></Box>
                    </Container>

                    <Typography
                        variant='h2'
                        sx={{ fontWeight: 'bolder',mb:1 }}
                    >
                        {text}
                    </Typography>

                    <Button className=' '
                        size='large'
                        sx={{ color: 'white',mt:1, fontWeight: 'bolder', transform: 'skew(-5deg)', marginBottom: { lg: '22%', xl: '22%', xs: '0%', sm: '3%', md: '3%' } }}
                        variant='contained'
                    >{value}</Button>
                </Box>
            </Container>
            <Container>
                <Box className="small-sep "></Box>
            </Container>
        </div>
    )
}

export default HeroSection
