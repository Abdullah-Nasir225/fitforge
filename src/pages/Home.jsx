import React, { use, useEffect, useRef, useState } from 'react'
import CircularGallery from '../components/CircularGallery';
import { motion, useInView } from "motion/react"
import Footer from '../components/Footer';
import { TextField, Button, Typography, Grid, Container, Box } from '@mui/material';
import SimpleSlider from '../components/SimpleSlider';
import Btn from '../components/Btn';
import img from '../assests/img/back1.png';
import resp from '../assests/img/resp1.png';
import Spinner from '../components/Spinner';
import girl from '../assests/img/fitgirl.png';
import ScrollVelocity from '../components/ScrollVelocity';
import fit from '../assests/img/fitn.png';
import { MenuBookOutlined, Apple, Checkroom, FitnessCenter, Hiking } from '@mui/icons-material';
import curve from '../assests/img/curve.png';
import CountUp from 'react-countup';
import AboutSec from '../components/AboutSec';
import Email from '../components/Email';

const Home = () => {

  const Motionbox = motion(Box);
  const ref = useRef(null);
  const inView = useInView(ref);
  const [increase, setIncrease] = useState(false);


  useEffect(() => {
    if (inView) {
      setIncrease(true);
    }
  })
  return (
    <div>
      {/* Background Images */}
      {/* <Box
        component="img"
        src={img}
        alt='back-img'
        sx={{
          width: '100%', position: 'absolute', top: '0', left: 0, zIndex: -1,
          display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }
        }}
      >
      </Box>
      <Box
        component="img"
        src={resp}
        alt='back-img'
        sx={{
          width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1,
          display: {
            xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none', height: '100%'
          }
        }}
      >
      </Box> */}
      <Spinner />
      <Container disableGutters maxWidth={false} sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ order: { xs: 2, sm: 1, md: 1, lg: 1, xl: 1 } }} >
            <Box sx={{ paddingTop: { xs: 0, sm: 0, md: '10%', lg: '10%', xl: '10%' }, objectFit: 'cover' }}>
              <Typography
                variant='h2'
                align='left'
                sx={{ fontWeight: 'bold', padding: '0 1rem', fontSize: { lg: '4.7rem', xs: '2.1rem', sm: '2.5rem', md: '4rem' } }}
              >
                We Stay with Our
                <Typography
                  variant='span'
                  color='#FB8942'
                  margin={2}
                >
                  Best Coach
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h6'
                align='left'
                color=" rgb(50, 51, 51)"
                sx={{ fontSize: { sm: '1.1em', xs: '1em', md: '1.3rem', lg: '1.4rem', xl: '1.4rem' }, padding: '1rem', fontWeight: '400' }}
              >
                Whether your aim is to loose weight, tone up, gain weight we can put together a gym programme or recommend the right classes for you to attend in our studios.
              </Typography>
            </Box>
            <Box >
              <Container>
                <Box className="small-sep"></Box>
              </Container>
              <Btn text="Get Started" paths="/Services" />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} className="d-flex" sx={{ order: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 } }}>
            <Box
              component="img"
              src={girl}
              alt='girl-img'
              sx={{ width: '100%', height: 'auto' }}
            >
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ overflow: 'hidden', marginTop: '1rem' }}
        disableGutters maxWidth={false}>

        <ScrollVelocity

          texts={['Fit Forge -', 'Fitness Club']}
          velocity={20}
          className="custom-scroll-text"
        />      </Container>
      <Container>
        <Box className="large-sep "></Box>
      </Container>
      <Container disableGutters maxWidth={false}>
        <Grid spacing={1} container>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} className=" d-flex">
            <Box
              component="img"
              src={fit}
              alt='girl-img'
              sx={{ width: '100%', height: '100%' }}
            >
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} >
            <Box className="large-sep "></Box>
            <Box className="large-sep " sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'block', xl: 'block' } }}></Box>

            <Box>
              <Typography
                variant='h6'
                align='left'
                color=" rgba(65, 65, 65, 1)"
                sx={{ fontSize: { sm: '1.1em', xs: '1em', md: '1.3rem', lg: '1.4rem', xl: '1.4rem' }, padding: '1rem', fontWeight: '350' }}
              >
                Get Your Perfect Workout
              </Typography>
              <Typography
                variant='h2'
                align='left'
                sx={{ fontWeight: 'bold', padding: '0 1rem', fontSize: { lg: '4.7rem', xs: '2.1rem', sm: '2.5rem', md: '4rem' } }}
              >
                Perfect                <Typography
                  variant='span'
                  color='#FB8942'
                >
                  Trainers
                </Typography>
              </Typography>

              <Typography
                variant='h6'
                align='left'
                color=" rgba(65, 65, 65, 1)"
                sx={{ fontSize: { sm: '1.1em', xs: '1em', md: '1.3rem', lg: '1.4rem', xl: '1.4rem' }, padding: '1rem', fontWeight: '350' }}
              >
                We provide end-to-end fitness traing with our professional trainer. It includes various activites including but not limited to yoga, fat loss and many more.
              </Typography>

            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
            >
              <Motionbox className='d-flex'
                component='div'
                sx={{ width: { xs: '95%', md: '45%', lg: '45%', xl: '45%' }, background: '#fce0cfff', height: '3.5rem', fontWeight: 'bold', gap: '0.5rem', fontSize: '1.5rem', borderLeft: '7px solid #ffd3b8ff' }}
                whileHover={{ borderLeftColor: '#FB8942' }}
              >
                <FitnessCenter sx={{ color: 'red', fontSize: '40px' }} />
                Gym & Fitness
              </Motionbox>
              <Motionbox className='d-flex'
                component='div'
                sx={{ width: { xs: '95%', md: '45%', lg: '45%', xl: '45%' }, background: '#fce0cfff', height: '3.5rem', fontWeight: 'bold', gap: '0.5rem', fontSize: '1.5rem', borderLeft: '7px solid #ffd3b8ff' }}
                whileHover={{ borderLeftColor: '#FB8942' }}
              >
                <Checkroom sx={{ color: 'red', fontSize: '40px' }} />
                Health & Fitness
              </Motionbox>
              <Motionbox className='d-flex'
                component='div'
                sx={{ width: { xs: '95%', md: '45%', lg: '45%', xl: '45%' }, background: '#fce0cfff', height: '3.5rem', fontWeight: 'bold', gap: '0.5rem', fontSize: '1.5rem', borderLeft: '7px solid #ffd3b8ff' }}
                whileHover={{ borderLeftColor: '#FB8942' }}
              >
                <Hiking sx={{ color: 'green', fontSize: '40px' }} />
                Motivation
              </Motionbox>
              <Motionbox className='d-flex'
                component='div'
                sx={{ width: { xs: '95%', md: '45%', lg: '45%', xl: '45%' }, background: '#fce0cfff', height: '3.5rem', fontWeight: 'bold', gap: '0.5rem', fontSize: '1.5rem', borderLeft: '7px solid #ffd3b8ff' }}
                whileHover={{ borderLeftColor: '#FB8942' }}
              >
                <Apple sx={{ color: 'red', fontSize: '40px' }} />
                Right Nutrition
              </Motionbox>
            </Box>
            <Box className="large-sep "></Box>
            <Btn text="About Trainers" sx={{ textAlign: 'left' }} paths="/About" />

          </Grid>
        </Grid>
      </Container>
      {/* Satisfied Clients section */}
      <Container>
        <Box className="large-sep "></Box>
      </Container>
      <Container maxWidth={false} disableGutters sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={curve}
          alt='curve-img'
          sx={{ width: '100%' }}
        >

        </Box>
        <Typography
          variant='h1'
          sx={{
            position: 'absolute', top: '45%', transform: 'rotate(-5deg)', left: '12%',
            color: 'white', fontWeight: '450', fontSize: { xs: '1.8rem', sm: '3.5rem', lg: '5rem', md: '4rem', xl: '5.5rem' }
          }}
        >
          Happy Clients
        </Typography>
        <Typography
          ref={ref}
          variant='h1'
          sx={{
            position: 'absolute', top: '32%', transform: 'rotate(-5deg)', right: '12%', opacity: 1,
            color: 'rgba(255, 217, 0, 1)', fontWeight: '500', fontSize: { xs: '1.8rem', sm: '3.5rem', lg: '5rem', md: '4rem', xl: '5.5rem' }
          }}>
          {increase ? <CountUp end={100} duration={3} /> : 0}
        </Typography>
      </Container>
      <AboutSec />
      {/*this is services section */}

      <Container>
        <Box className="large-sep "></Box>
      </Container>
      <Container>
        <Box className="large-sep "></Box>
      </Container>
      <Container>
        <Box className="large-sep "></Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{ position: 'relative' }}>
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}
              sx={{ position: 'relative' }}
            >
              <Box
                component="span"
                sx={{ position: 'absolute', height: '100%', width: '2rem', backgroundColor: '#FB8942', transform: 'skew(-10deg)', left: 0 }}
              >

              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '12%' }}
              >
                <Typography
                  variant='p'
                  sx={{ fontSize: '1.5rem', fontWeight: '450', color: 'grey', textAlign: 'left' }}
                >
                  Our Services
                </Typography>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '12%' }}
              >
                <Typography
                  variant='p'
                  sx={{ fontSize: '4rem', fontWeight: 'bolder', textAlign: 'left', fontSize: { lg: '4rem', xs: '2.1rem', sm: '2.5rem', md: '4rem', xl: '4.3rem' } }}
                >
                  Bring Your Fitness Ideas To Life
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Container>
            <Box className="large-sep "></Box>
            <Box className="large-sep "></Box>
          </Container>

          <Grid container spacing={{ xs: 5, sm: 5, md: 1, lg: 1, xl: 1 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} sx={{ position: 'relative' }}>
              <Box
                className='d-flex'
                sx={{
                  position: 'absolute', height: '5rem', width: '6rem', zIndex: 1, backgroundColor: 'white', border: '2px solid red'
                  , top: '-10%', left: '20%'

                }}
              >
                <Apple sx={{ color: 'green', fontSize: '60px' }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#ffdfdfff', transform: 'skew(-5deg)', padding: '6rem 2rem 0 2rem',
                  '&:hover': {
                    backgroundColor: '#FB8942'
                  },
                  '&:hover .typo': {
                    color: '#ffffff'
                  },
                  '&:hover .butn': {
                    color: 'black',
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }
                }}
              >
                <Typography
                  component='h5'
                  className="typo"
                  sx={{ fontSize: '21px', fontWeight: 'bolder', textAlign: 'left', paddingLeft: '5px' }}
                >
                  Right Nutrition
                </Typography>

                <Typography
                  component='h6'
                  className="typo"
                  sx={{ fontSize: '16px', textAlign: 'left', paddingLeft: '5px', paddingTop: '5px' }}
                >
                  Aliquam sit amet volutpat sem, eget aliquet odio. Integer lobortis sed.
                </Typography>
                <Box
                  sx={{ padding: '2rem' }}
                >
                  <Button
                    variant='contained'
                    className='butn'
                    sx={{ height: '3rem', borderRadius: 0, color: '#ffffff', fontWeight: 'bold' }}
                  >Read More</Button>                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} sx={{ position: 'relative' }}>
              <Box
                className='d-flex'
                sx={{
                  position: 'absolute', height: '5rem', width: '6rem', zIndex: 1, backgroundColor: 'white', border: '2px solid red'
                  , top: '-10%', left: '20%'

                }}
              >
                <Checkroom sx={{ color: 'green', fontSize: '60px' }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#ffdfdfff', transform: 'skew(-5deg)', padding: '6rem 2rem 0 2rem',
                  '&:hover': {
                    backgroundColor: '#FB8942'
                  },
                  '&:hover .typo': {
                    color: '#ffffff'
                  },
                  '&:hover .butn': {
                    color: 'black',
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }
                }}
              >
                <Typography
                  component='h5'
                  className="typo"
                  sx={{ fontSize: '21px', fontWeight: 'bolder', textAlign: 'left', paddingLeft: '5px' }}
                >
                  Health & Fitness
                </Typography>

                <Typography
                  component='h6'
                  className="typo"
                  sx={{ fontSize: '16px', textAlign: 'left', paddingLeft: '5px', paddingTop: '5px' }}
                >
                  Aliquam sit amet volutpat sem, eget aliquet odio. Integer lobortis sed.
                </Typography>
                <Box
                  sx={{ padding: '2rem' }}
                >
                  <Button
                    variant='contained'
                    className='butn'
                    sx={{ height: '3rem', borderRadius: 0, color: '#ffffff', fontWeight: 'bold' }}
                  >Read More</Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} sx={{ position: 'relative' }}>
              <Box
                className='d-flex'
                sx={{
                  position: 'absolute', height: '5rem', width: '6rem', zIndex: 1, backgroundColor: 'white', border: '2px solid red'
                  , top: '-10%', left: '20%'

                }}
              >
                <FitnessCenter sx={{ color: 'green', fontSize: '60px' }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#ffdfdfff', transform: 'skew(-5deg)', padding: '6rem 2rem 0 2rem',
                  '&:hover': {
                    backgroundColor: '#FB8942'
                  },
                  '&:hover .typo': {
                    color: '#ffffff'
                  },
                  '&:hover .butn': {
                    color: 'black',
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }
                }}
              >
                <Typography
                  className="typo"
                  component='h5'
                  sx={{ fontSize: '21px', fontWeight: 'bolder', textAlign: 'left', paddingLeft: '5px' }}
                >
                  Gym & Exercise
                </Typography>

                <Typography
                  className="typo"
                  component='h6'
                  sx={{ fontSize: '16px', textAlign: 'left', paddingLeft: '5px', paddingTop: '5px' }}
                >
                  Aliquam sit amet volutpat sem, eget aliquet odio. Integer lobortis sed.
                </Typography>
                <Box
                  sx={{ padding: '2rem' }}
                >
                  <Button
                    variant='contained'
                    className='butn'
                    sx={{ height: '3rem', borderRadius: 0, color: '#ffffff', fontWeight: 'bold' }}
                  >Read More</Button>                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} sx={{ position: 'relative' }}>
              <Box
                className='d-flex'
                sx={{
                  position: 'absolute', height: '5rem', width: '6rem', zIndex: 1, backgroundColor: 'white', border: '2px solid red'
                  , top: '-10%', left: '20%',
                }}
              >
                <MenuBookOutlined sx={{ color: 'green', fontSize: '60px' }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#ffdfdfff', transform: 'skew(-5deg)', padding: '6rem 2rem 0 2rem',
                  '&:hover': {
                    backgroundColor: '#FB8942'
                  },
                  '&:hover .typo': {
                    color: '#ffffff'
                  },
                  '&:hover .butn': {
                    color: 'black',
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }
                }}
                transition={{ duration: 2 }}
              >
                <Typography
                  component='h5'
                  className='typo'
                  sx={{ fontSize: '21px', fontWeight: 'bolder', textAlign: 'left', paddingLeft: '5px' }}
                >
                  Health Motivation
                </Typography>

                <Typography
                  component='h6'
                  className='typo'
                  sx={{ fontSize: '16px', textAlign: 'left', paddingLeft: '5px', paddingTop: '5px' }}
                >
                  Aliquam sit amet volutpat sem, eget aliquet odio. Integer lobortis sed.
                </Typography>
                <Box
                  sx={{ padding: '2rem' }}
                >
                  <Button
                    variant='contained'
                    className='butn'
                    sx={{ height: '3rem', borderRadius: 0, color: '#ffffff', fontWeight: 'bold' }}
                  >Read More</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container>
        <Box className="large-sep "></Box>
      </Container>

      <Container disableGutters maxWidth={false}
        sx={{ backgroundColor: '#1b1b1bff' }}
      >
        <Container
        >
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </Container>
      </Container>

      {/* Testimonial Secion Start from here */}
      <Container sx={{ background: '#ffdfdfff' }} disableGutters maxWidth={false}>
        <Container>
          <Box className="large-sep "></Box>
        </Container>
        <Container>
          <Box className="large-sep "></Box>
        </Container>
        <Typography
          variant='p'
          sx={{ fontSize: '1.5rem', fontWeight: '450', color: 'grey', textAlign: 'center' }}
        >
          Testimonial
        </Typography>
        <Box>
          <Typography
            variant='p'
            sx={{ fontSize: '4rem', fontWeight: 'bolder', textAlign: 'left', fontSize: { lg: '4rem', xs: '2.1rem', sm: '2.5rem', md: '4rem', xl: '4.3rem' } }}
          >
            What Client Say’s
          </Typography>
        </Box>
        <Container maxWidth={true}>
          <SimpleSlider />
        </Container>
        <Typography
          variant='p'
          sx={{ fontSize: '4rem', fontWeight: 'bolder', textAlign: 'center', fontSize: { lg: '7rem', xs: '4.1rem', sm: '3.5rem', md: '6rem', xl: '7.3rem' }, color: 'white', opacity: 0.2 }}
        >
          FeedBack!
        </Typography>
      </Container>
      {/* Email section */}
      <Container>
        <Email />
      </Container>
      {/* Footer section */}
      <Footer />

    </div >
  )
}
export default Home
