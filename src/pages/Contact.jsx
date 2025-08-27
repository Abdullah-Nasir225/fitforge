import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Thanks from './Thanks';
import { Container, Box, Typography, TextField, Button, Stack, FormLabel, Grid } from '@mui/material';
import { motion } from "motion/react"
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { db } from '../Firebase';
import { setDoc, doc } from 'firebase/firestore';
import Email from '../components/Email';
import { Call, EmailSharp, LocationOn } from '@mui/icons-material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export default function Contact() {
  const Motionfacebook = motion(Facebook)
  const Motioninstagram = motion(Instagram)
  const Motiontwitter = motion(Twitter)
  const Motionlinkedin = motion(LinkedIn)
  const Navigate = useNavigate();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = sessionStorage.getItem('email');
      await setDoc(doc(db, "Contact", user), {
        Name: Name,
        Email: email,
        Phone: phone,
        Message: msg
      })
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
      Navigate('/thanks');
    } catch (e) {
      console.log("Your error is: ", e.message);
    }
  }


  return (
    <div>

      <HeroSection text="Contact Us" value="Home > Contact" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>

      <Container>
        {/* Contact Info */}
        <Grid container spacing={2} className='d-flex'>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }} sx={{ order: { xs: 2, sm: 1, md: 1, lg: 1, xl: 1 } }} >
            <Box
              sx={{ background: '#141414ff', p: 4, mb: 2 }}
            >
              <Typography
                align='left'
                variant='body1'
                sx={{ fontSize: '1.8rem', fontWeight: '500', color: '#f7f7f7ff', p: 1 }}
              >
                Contact Information
              </Typography>

              <Typography
                variant='body1'
                align='left'
                sx={{ fontSize: '1rem', fontWeight: '400', color: '#a3a3a3ff', p: 1 }}
              >
                Fill up the form and our Team will get back to you within 24 hours.
              </Typography>
              <Typography
                variant='body1'
                align='left'
                sx={{ fontSize: '1rem', fontWeight: '460', color: '#f1f1f1ff', mt: 2, p: 1 }}
              >
                <LocationOn sx={{ color: '#FB8942', mr: 1 }} />
                Service Road Near Shaukat Khanam Hospital, Karachi, Pakistan
              </Typography>
              <Typography
                variant='body1'
                align='left'
                sx={{ fontSize: '1rem', fontWeight: '460', color: '#f1f1f1ff', mt: 2, p: 1 }}
              >
                <Call sx={{ color: '#FB8942', mr: 1 }} />
                11-222-3333
              </Typography>
              <Typography
                variant='body1'
                align='left'
                sx={{ fontSize: '1rem', fontWeight: '460', color: '#f1f1f1ff', mt: 2, p: 1 }}
              >
                <EmailSharp sx={{ color: '#FB8942', mr: 1 }} />
                support@BodyShape.com
              </Typography>

              <Box sx={{ padding: '5px', mt: 4 }}>
                <Typography
                  variant='h6'
                  sx={{ fontSize: '1.1rem', fontWeight: '450', textAlign: 'left', color: '#f1f1f1ff' }}>
                  Our Social
                </Typography>
              </Box>
              <Box sx={{ padding: '5px', mt: 2, gap: '5%' }} className="d-flex" >
                <a href="https://www.facebook.com" target='_blank'><Motionfacebook sx={{ fontSize: '20px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                  whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                /></a>
                <a href="https://www.instagram.com" target='_blank'><Motioninstagram sx={{ fontSize: '20px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                  whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                /></a>
                <a href="https://www.twitter.com" target='_blank'><Motiontwitter sx={{ fontSize: '20px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                  whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                /></a>
                <a href="https://www.linkedin.com" target='_blank'><Motionlinkedin sx={{ fontSize: '20px', color: 'white', background: '#Fb8942', border: '10px solid #Fb8942', cursor: 'pointer' }}
                  whileHover={{ background: '#2c2c2cff', borderColor: '#2c2c2cff' }}
                /></a>
              </Box>
            </Box>
          </Grid>
          {/* Contact form */}
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }} sx={{ order: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }} >
            <Box sx={{ borderRadius: '5px', p: 4 }}>
              <form onSubmit={handleSubmit} sx={{ color: '#ffffff', zIndex: 1 }}>
                <Stack direction="column" spacing={2}>

                  <TextField id="standard-basic" variant="standard" label="Name" value={Name} onChange={(e) => setName(e.target.value)} size="small" type="name" required />

                  <TextField id="standard-basic" variant="standard" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} size="small" type="email" required />

                  <TextField id="standard-basic" variant="standard" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} size="small" type="number" required />

                  <TextField id="standard-basic" multiline
                    rows={4} variant="standard" label="Message" value={msg} onChange={(e) => setMsg(e.target.value)} size="small" type="message" />


                  <Button variant="contained" type="submit" sx={{ color: '#ffffff' }}>Send Message</Button>
                </Stack>
              </form>
            </Box>
          </Grid>

        </Grid>
      </Container>

      <Container>
        <Email />
      </Container>
      <Footer />
    </div>
  )
}

