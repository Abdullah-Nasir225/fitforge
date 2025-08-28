import React from 'react'
import { Grid, Container, Box } from '@mui/material';
import CircularGallery from '../components/CircularGallery';
import AboutSec from '../components/AboutSec';
import Spinner from '../components/Spinner';
import Card1 from '../components/Card1';
import ImageCard from '../components/ImgCard';
import img1 from '../assests/img/gym1.png'
import img2 from '../assests/img/gym2.png';
import img3 from '../assests/img/gym4.png';
import img4 from '../assests/img/gym3.png';
import Email from '../components/Email';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
const About = () => {
  const value = 'Home > About';

  return (
    <div>
      <HeroSection value="Home > About" text="About" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <AboutSec />
      <Container>
        <Box sx={{ height: '7rem', width: '100%' }}></Box>

      </Container>

      {/* card & img section */}
      <Container disableGutters maxWidth={false}>
        <Grid container spacing={0}>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className=" d-flex">
            <Card1
              back='#303030ff' heading='BODY SHAPE' subheading="Cross Fit"
              para="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas" btnClr="#FB8942" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} sx={{height:'5rem'}}className=" d-flex">
            <ImageCard img={img1} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className=" d-flex">
            <Card1
              back='#FB8942' heading='BODY SHAPE' subheading="Cross Fit"
              para="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas" btnClr="#303030ff" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} sx={{height:'5rem'}} className=" d-flex">
            <ImageCard img={img2} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} sx={{height:'5rem'}} className=" d-flex">
            <ImageCard img={img3} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className=" d-flex">
            <Card1
              back='#FB8942' heading='BODY SHAPE' subheading="Cross Fit"
              para="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas" btnClr="#303030ff" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} sx={{height:'5rem'}} className=" d-flex">
            <ImageCard img={img4} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className=" d-flex">
            <Card1
              back='#303030ff' heading='BODY SHAPE' subheading="Cross Fit"
              para="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas" btnClr="#FB8942" />
          </Grid>

        </Grid>
      </Container>
      {/* Gallery */}
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
      <Container>
        <Email />
      </Container>
      <Footer />

    </div>
  )
}

export default About
