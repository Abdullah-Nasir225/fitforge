import React from 'react'
import { motion } from "motion/react"
import { Typography, Grid, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import map from '../assests/img/map.png'
import footlogo from '../assests/img/footlogo.png';
import { ArrowForward, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    const Motionfacebook = motion(Facebook)
    const Motioninstagram = motion(Instagram)
    const Motiontwitter = motion(Twitter)
    const Motionlinkedin = motion(LinkedIn)
    return (
        <div>
            {/* Footer section starts from here */}
            <Container disableGutters sx={{ backgroundColor: '#fff1f0ff', padding: '2rem', }} maxWidth={false}>
                <Grid container spacing={2} >
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} >
                        <Box
                            component='img'
                            alt='foot-logo'
                            src={footlogo}
                            width='60%'
                        ></Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'left', color: '#3a3a3aff', lineHeight: '1.4rem' }}>
                                A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '450', textAlign: 'left', color: '#242424ff' }}>
                                Social
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px', gap: '5%' }} className="d-flex" >
                            <a href="https://www.facebook.com" target='_blank'><Motionfacebook sx={{ fontSize: '25px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                                whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                            /></a>
                            <a href="https://www.instagram.com" target='_blank'><Motioninstagram sx={{ fontSize: '25px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                                whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                            /></a>
                            <a href="https://www.twitter.com" target='_blank'><Motiontwitter sx={{ fontSize: '25px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                                whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                            /></a>
                            <a href="https://www.linkedin.com" target='_blank'><Motionlinkedin sx={{ fontSize: '25px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                                whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                            /></a>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} >
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.7rem', fontWeight: '500', textAlign: 'left', color: '#242424ff' }}>
                                Locations
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '450', textAlign: 'left', color: '#242424ff' }}>
                                Sindh
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'left', color: '#242424ff' }}>
                                Service Road Near Shaukat Khanam Hospital, Karachi, Pakistan
                            </Typography>
                        </Box>
                        <Box
                            component='img'
                            alt='foot-logo'
                            src={map}
                            width='60%'
                        ></Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} >
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.7rem', fontWeight: '500', textAlign: 'left', color: '#242424ff' }}>
                                Working Hours
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'left', color: '#242424ff' }}>
                                Monday – Friday:
                            </Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '500', textAlign: 'left', color: '#Fb8942' }}>
                                07:00 – 21:00
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'left', color: '#242424ff' }}>
                                Saturday
                            </Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '500', textAlign: 'left', color: '#Fb8942' }}>
                                07:00 – 18:00
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '400', textAlign: 'left', color: '#242424ff' }}>
                                Sunday
                            </Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '5px' }}>
                            <Typography
                                variant='h6'
                                sx={{ fontSize: '1.1rem', fontWeight: '500', textAlign: 'left', color: '#Fb8942' }}>
                                Close
                            </Typography>
                        </Box>
                        <Box sx={{ paddingLeft: '5px', display: 'flex', alignItems: 'center', gap: '1%' }}>
                            <Box>
                                <Typography
                                    variant='h6'
                                    sx={{ fontSize: '1.1rem', fontWeight: '500', textAlign: 'left', color: '#Fb8942' }}>
                                    More Here
                                </Typography>
                            </Box>
                            <Box>
                                <Link to="/Shedule"><ArrowForward sx={{ color: '#Fb8942' }} /></Link>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
                <Container>
                    <Box className="large-sep "></Box>
                </Container>
                <hr />
                <Typography
                    component='h6'
                    className="typo"
                    sx={{ fontSize: '15px', textAlign: 'center', fontWeight: 500, paddingTop: '0.8rem' }}
                >
                    <Typography
                        variant='span'
                        color='#FB8942'
                        sx={{ paddingRight: '0.2rem' }}
                    >
                        Design & Develop
                    </Typography>
                    by WebNest Solutions
                </Typography>

            </Container>

        </div>
    )
}

export default Footer
