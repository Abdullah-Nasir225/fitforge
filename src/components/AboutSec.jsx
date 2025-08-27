import {React,useState} from 'react'
import { TextField, Button, Typography, Grid, Container, Box } from '@mui/material';
import { motion, useInView } from "motion/react"
import back from '../assests/img/back.png'
import gym1 from '../assests/img/gym1.png'
import gym2 from '../assests/img/gym2.png'
import resp2 from '../assests/img/resp2.png'
import {Call} from '@mui/icons-material';


export default function AboutSec() {
    const Motionbox = motion(Box);
    const Motioncall = motion(Call)

    const mission = 'We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend.'
    const vission = 'Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo mauris, ac volutpat dui. Nullam eget enim ut mi bibendum ultrices. Pellentesque non feugiat nisi. Nam aliquam accumsan ante, ut accumsan risus together.'
    const [values, setValues] = useState(mission)
    const [act, setAct] = useState('btn1');

    const handleClick1 = () => {
        setValues(mission);
        setAct('btn1')
    }
    const handleClick2 = () => {
        setValues(vission);
        setAct('btn2')
    }

    return (
        <div>
            {/*this is about us section */}
            <Container maxWidth={false} disableGutters sx={{ position: 'relative' }}>
                <Box
                    component="img"
                    src={back}
                    alt='curve-img'
                    sx={{
                        position: 'absolute', minHeight: '100%', width: '100%', top: 0, left: 0, zIndex: -1,
                        display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }
                    }}

                >
                </Box>
                <Box
                    component="img"
                    src={resp2}
                    alt='back-img'
                    sx={{
                        width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1,
                        display: {
                            xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none', height: '100%'
                        }
                    }}
                >
                </Box>
                <Container>
                    <Grid container spacing={1}>
                        <Box className="large-sep "></Box>
                        <Box className="large-sep "></Box>
                        <Box className="large-sep "></Box>
                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} >
                            <Box
                                sx={{ display: 'flex', justifyContent: 'flex-start', padding: '2%' }}
                            >
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '1.5rem', fontWeight: '450', color: 'grey', textAlign: 'left' }}
                                >
                                    About Us
                                </Typography>
                            </Box>
                            <Box
                                sx={{ display: 'flex', justifyContent: 'flex-start', padding: '2%' }}
                            >
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '4.5rem', fontWeight: 'bolder', textAlign: 'left', fontSize: { lg: '4rem', xs: '2.1rem', sm: '2.5rem', md: '4rem', xl: '4.3rem' } }}
                                >
                                    We Help To Get   <Typography
                                        variant='span'
                                        color='#FB8942'
                                    >
                                        Fitness
                                    </Typography> Goal
                                </Typography>
                            </Box>
                            <Box
                                sx={{ display: 'flex', justifyContent: 'flex-start', padding: '2%' }}
                            >
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '1.3rem', fontWeight: '500', textAlign: 'left' }}
                                >
                                    We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex', justifyContent: 'flex-start', padding: '1%', marginLeft: '1rem',
                                    backgroundColor: '#FB8942', width: { xs: '80%', sm: '80%', md: '50%', lg: '50%', xl: '50%' }, borderRadius: '1px', transform: 'skew(-10deg)'
                                }}
                            >
                                <button
                                    onClick={handleClick1}
                                    className={`btns ${act === 'btn1' ? 'actives' : ''} `}
                                >Our Mission</button>

                                <button
                                    onClick={handleClick2}
                                    className={`btns ${act === 'btn2' ? 'actives' : ''} `}
                                >Our Vission</button>
                            </Box>
                            <Box
                                sx={{ display: 'flex', justifyContent: 'flex-start', padding: '2%' }}
                            >
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '1.2rem', fontWeight: '400', textAlign: 'left', color: '#424242ff' }}
                                >
                                    {values}
                                </Typography>
                            </Box>

                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} className="d-flex" sx={{ flexWrap: 'wrap' }}>
                            <Motionbox
                                initial={{ rotate: '0deg' }}
                                animate={{
                                    skewX: ['-2deg', '2deg', '-2deg']
                                }}
                                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                                component="img"
                                src={gym1}
                                alt='back-img'
                                sx={{
                                    width: '60%', border: '10px solid white', marginBottom: '1%'
                                }}
                            >
                            </Motionbox>
                            <Motionbox
                                initial={{ rotate: '0deg' }}
                                animate={{
                                    skewX: ['2deg', '-2deg', '2deg']
                                }}
                                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                                component="img"
                                src={gym2}
                                alt='back-img'
                                sx={{
                                    width: '60%', border: '10px solid white', marginTop: '1%'
                                }}
                            >
                            </Motionbox>

                        </Grid>
                        {/* This is main box of call section */}
                        <Box
                            className='d-flex'
                            sx={{ gap: '5%' }}
                        >
                            <Box
                                sx={{
                                    background: '#FB8942', borderLeft: '6px solid #272727ff', padding: '1%',
                                    transform: 'skew(-10deg)', marginLeft: '1rem',
                                }}
                            >
                                <Motioncall
                                    sx={{ fontSize: '30px', color: '#ffffff' }}
                                    initial={{ rotate: '0deg' }}
                                    animate={{
                                        skewX: ['-10deg', '10deg', '-10deg']
                                    }}
                                    transition={{ duration: 0.5, ease: 'easeInOut', repeat: Infinity }}
                                />
                            </Box>
                            <Box
                                className='d-flex'
                                sx={{ flexWrap: 'wrap', justifyContent: 'flex-start' }}
                            >
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '1.1rem', fontWeight: '500', textAlign: 'left', width: '100%' }}
                                >
                                    Call Us for Help
                                </Typography>
                                <Typography
                                    variant='p'
                                    sx={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'left', width: '100%', color: '#FB8942' }}
                                >
                                    +92 30405 26965
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}
