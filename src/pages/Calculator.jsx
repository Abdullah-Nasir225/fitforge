import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import { Grid, Container, Box, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography, TextField, Button, Stack, FormLabel, } from '@mui/material';
import Email from '../components/Email';
import Footer from '../components/Footer';

export default function Calculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Below 18.5', 'Underweight',),
    createData('18.5 - 24.9', 'Healthy',),
    createData('25.0 - 29.9', 'Overweight',),
    createData('30.0 - and Above', 'Obese',),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const meter = age/3.281; //convert age from feet to meter
    const age_square = meter * meter;
    const result = weight/age_square;
    setBMI(`Your BMI is: ${Math.round(result)}`)
  }

  return (
    <div>
      <HeroSection text="Weight Calculator" value="Pages > Calculator" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container>
        <Typography
          variant='p'
          sx={{ fontSize: '4.5rem', fontWeight: 'bolder', textAlign: 'left', fontSize: { lg: '4rem', xs: '2.1rem', sm: '2.5rem', md: '4rem', xl: '4.3rem' } }}
        >
          Body Mass Index  <Typography
            variant='span'
            color='#FB8942'
          >
            Calculator
          </Typography>
        </Typography>
      </Container>
      <Container >
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container disableGutters sx={{p:2}}>
        <Grid container spacing={4} className='d-flex border' sx={{ p: 4, borderRadius:'5px' }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}  >
            <Typography
              align='left'
              variant='body1'
              sx={{ fontSize: '1.1rem', fontWeight: '400', color: '#727272ff', p: 1 }}
            >
              A BMI (Body Mass Index) calculator is used to quickly assess whether a person’s body weight is in a healthy range relative to their height.
            </Typography>
            <form onSubmit={handleSubmit} sx={{ color: '#ffffff', zIndex: 1 }}>
              <Stack direction="column" spacing={2}>

                <TextField id="standard-basic" variant="standard" label="Height/ft" value={age} onChange={(e) => setAge(parseFloat(e.target.value))} size="small" type="number" required />

                <TextField id="standard-basic" variant="standard" label="Weight/kg" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} size="small" type="number" required />

                <TextField disabled id="standard-basic" variant="standard" label="" value={bmi} size="small" type="text"/>

                <Button variant="contained" type="submit" sx={{
                  color: '#ffffff', width: {xs:'70%',sm:'50%',md:"40%",lg:'40%',xl:'40%'},
                  borderRadius: 0, backgroundColor: '#1a1a1aff', transform: 'skew(-10deg)', mt: 3
                }}>Calculate BMI</Button>
              </Stack>
            </form>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}  >
            <TableContainer sx={{ widht: '80%' }} >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bolder', fontSize: '18px' }}>BMI</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bolder', fontSize: '18px' }}>Weight Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
