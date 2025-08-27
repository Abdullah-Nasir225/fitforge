import React, { useEffect, useState } from 'react'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import img from '../assests/img/fitness3.png'
import {
  Typography, InputLabel, MenuItem, Container, Box, Checkbox,
  FormControl, TextField, Button, Stack, FormLabel,
} from '@mui/material';
import HeroSection from '../components/HeroSection';
import Select from '@mui/material/Select';

const Appointment = () => {
  useEffect(() => {
    const user = sessionStorage.getItem('email');
    if (user) {
      Navigate('/appointment');
    }
    else {
      Navigate('/signup')
    }
  }, [])
  const thanks = useNavigate();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [service, setService] = useState('');
  const [SelectedValue, setSelectedValue] = useState('Yes');
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = sessionStorage.getItem('email');
    await setDoc(doc(db, "Booking", user), {
      Name: Name,
      Email: email,
      PhoneNo: phone,
      Service: service,
      Status: SelectedValue
    })
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setSelectedValue('');
    setTimeout(() => {
      thanks('/thanks')
    }, 1000)
  }

  return (
    <div>
      <HeroSection value="Appointment" text="Book Appointment" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container className='d-flex' disableGutters maxWidth={false}
     
      >
        <Box sx={{
          border: '1px solid silver', borderRadius: '5px', p: 1, width: { xs: '90%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }
          ,
        }}>
          <form onSubmit={handleSubmit} sx={{ color: '#ffffff', zIndex: 1 }}>
            <Stack direction="column" spacing={2}>

              <FormLabel>Your Name</FormLabel>
              <TextField label="Name" value={Name} onChange={(e) => setName(e.target.value)} size="small" type="name" required />

              <FormLabel>Your Email</FormLabel>
              <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} size="small" type="email" required />

              <FormLabel>Your Phone</FormLabel>
              <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} size="small" type="number" required />

              <FormLabel>Select Service</FormLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Service</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={service}
                  label="Service"
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Personal Training">Personal Training</MenuItem>
                  <MenuItem value="Group Fitness">Group Fitness</MenuItem>
                  <MenuItem value="Strength Building">Strength Building</MenuItem>
                </Select>
              </FormControl>

              <FormLabel id="demo-radio-buttons-group-label">Have you Confirmed that you are listed in our system</FormLabel>
              <Checkbox {...label} required align="left" />

              <Button variant="contained" type="submit" sx={{ color: '#ffffff' }}>Book Now</Button>
            </Stack>
          </form>
        </Box>
      </Container>
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>

      <Container disableGutters maxWidth={false} className='d-flex' sx={{ background: '#F84', p: 2 }}>
        <Typography
          variant="p"
          sx={{ color: '#fff5ebff' }}
        >
          Alright Reserved with FitForge 2025
        </Typography>
      </Container>

    </div>
  )
}

export default Appointment
