import { React, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection'
import { Link } from 'react-router-dom'
import { Divider, Typography, Box, Button, Container, Grid } from '@mui/material'
import { motion } from 'motion/react'
import Email from '../components/Email';
import Footer from '../components/Footer';
import fitness1 from '../assests/img/fitness1.png';
import { CheckSharp, Help } from '@mui/icons-material';
import fitness2 from '../assests/img/fitness2.png'
import fitness3 from '../assests/img/fitness3.png'
import fitness4 from '../assests/img/fitness4.png'
import fitness5 from '../assests/img/fitness5.png'
import fitness6 from '../assests/img/fitness6.png'

export default function Services() {
  const imgref = useRef('');

  const list = [
    'We have thousands of solved threads and a customer satisfaction',
    'Whether your aim is to loose weight tone up build bulk or gain weight',
    'We are an independent gym that is committed to working'
  ]
  const Motionbox = motion(Box);
  const [active, setActive] = useState('btn1')
  const btn1 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness1
  }
  const btn2 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness2
  }
  const btn3 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness3
  }
  const btn4 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness4
  }
  const btn5 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness5
  }
  const btn6 = (btn) => {
    setActive(btn)
    imgref.current.src = fitness6
  }
  return (
    <div>
      <HeroSection text="Services" value="Home > Services" />
      <Container>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }} sx={{ order: { xs: 2, sm: 1, md: 1, lg: 1, xl: 1 } }} >
            <Box
              sx={{ background: '#141414ff', p: 2, mb: 2 }}
            >
              <button onClick={() => btn1('btn1')}
                className={`service-btn ${active == 'btn1' ? 'active-btn' : 'service-non-btn'}`}
              >Motivation
              </button>
              <button onClick={() => btn2('btn2')}
                className={`service-btn ${active == 'btn2' ? 'active-btn' : 'service-non-btn'}`}
              >Work
              </button>
              <button onClick={() => btn3('btn3')}
                className={`service-btn ${active == 'btn3' ? 'active-btn' : 'service-non-btn'}`}
              >Fat Loss
              </button>
              <button onClick={() => btn4('btn4')}
                className={`service-btn ${active == 'btn4' ? 'active-btn' : 'service-non-btn'}`}
              >Perfect Diet
              </button>
              <button onClick={() => btn5('btn5')}
                className={`service-btn ${active == 'btn5' ? 'active-btn' : 'service-non-btn'}`}
              >Health Coach
              </button>
              <button onClick={() => btn6('btn6')}
                className={`service-btn ${active == 'btn6' ? 'active-btn' : 'service-non-btn'}`}
              >Weight Gain
              </button>

            </Box>

            {/* Card 2 */}
            <Box
              sx={{ background: '#FB8942', pt: 3, pb: 3, mt: 2 }}
            >
              <Help sx={{ color: '#ffffff', fontSize: '85px' }} />
              <Typography
                align='center'
                variant='body1'
                sx={{ fontSize: '1.2rem', fontWeight: '500', color: '#ffffff', p: 1 }}
              >
                Do you Need Any Help?
              </Typography>
              <Divider color='#ffffff' sx={{ margin: '15px' }} />
              <Typography
                align='center'
                variant='body1'
                sx={{ fontSize: '1.8rem', fontWeight: 'bolder', color: '#ffffff', p: 1 }}
              >
                +92 305 051252 1
              </Typography>
              <Typography
                align='center'
                variant='body1'
                sx={{ fontSize: '1.2rem', fontWeight: '500', color: '#ffffff', p: 1 }}
              >
                info@fitforge.com
              </Typography>
              <Link to='/contact'><Button
                variant='contained'
                sx={{ height: '2.7rem', background: '#161616ff', textDecoration: 'none', borderRadius: 0, color: '#ffffff', fontWeight: 'bold', transform: 'skew(-10deg)' }}
              >Contact Us</Button></Link>
            </Box>

          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }} sx={{ order: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }} >
            <Box
              ref={imgref}
              component='img'
              src={fitness1}
              alt='img'
              width='100%'
            >
            </Box>
            <Box>
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '4.2rem', fontWeight: 'bolder', fontSize: { lg: '2rem', xs: '1.2rem', sm: '2rem', md: '2rem', xl: '2.3rem' }, p: 1 }}
              >
                Providing world class services
              </Typography>
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '1.1rem', fontWeight: '400', color: '#727272ff', p: 1 }}
              >
                We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight tone up build bulk or gain weight we can put together a gym programme or recommend the right classes for you to attend in our studios.
              </Typography>
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '1.1rem', fontWeight: '400', color: '#727272ff', p: 1 }}
              >
                We offer the best support and service you can imagine. Use our support forum if you have any questions and our team will respond. We have thousands of solved threads and a customer satisfaction of 97%. We do care that your site runs great!
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '3.2rem', fontWeight: 'bolder', fontSize: { lg: '1.5rem', xs: '1.1rem', sm: '1.5rem', md: '1.5rem', xl: '2rem' }, p: 1 }}
              >
                Learn About Fitness From These Mistakes
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {list.map((item, index) => (
                  <li key={index} style={{
                    display: 'flex', marginBottom: 9,
                    fontSize: '16px', fontWeight: '500', lineHeight: '2.1', color: '#727272ff'
                  }}>
                    <CheckSharp sx={{ color: '#FB9842' }} style={{ marginRight: 8 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box>
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '1.1rem', fontWeight: '400', color: '#727272ff', p: 1 }}
              >
                We offer the best support and service you can imagine. Use our support forum if you have any questions and our team will respond. We have thousands of solved threads and a customer satisfaction of 97%. We do care that your site runs great!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
   <Box className="large-sep "></Box>      
      {/* video */}

      <Container>
        <iframe
          width="100%"
          height={300}
          src="https://www.youtube.com/embed/tUykoP30Gb0?si=6WyQkUSEaPpcnrzD&playlist=tUykoP30Gb0&loop=1&autoplay=1&mute=1"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Container><Email /></Container>
      <Footer />
    </div >
  )
}
