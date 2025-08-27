import * as React from 'react';
import { Box, Container, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material'
import HeroSection from '../components/HeroSection';
import Email from '../components/Email';
import Footer from '../components/Footer';

function createData(name, calories, fat, carbs, protein, label1, label2, label3) {
  return { name, calories, fat, carbs, protein, label1, label2, label3 };
}

const rows = [
  createData('06:00 - 8:00', 'Open Gym', 'Cross Fit Class', '', '', 'Open Gym', 'Power Lifting', ''),
  createData('08:00 - 10:00', 'Open Gym', 'Open Gym', 'Legs Day', '', 'Open Gym', '', 'Power Lifting'),
  createData('10:00 - 12:00', '', 'Open Gym', '', '', '', 'Open gyn', ''),
  createData('12:00 - 14:00', '', 'Open Gym', '', '', '', 'Shoulders', ''),
  createData('14:00 - 16:00', 'Open Gym', '', 'Power Lifting', 'Legs Strengthen', '', 'Cross Fit', 'Open Gym'),
  createData('14:00 - 16:00', 'Power Lifting', '', 'Open Gym', '', 'Open Gym', '', ''),
  createData('16:00 - 18:00', '', '', 'Open Gym', '', 'Open Gym', '', 'Open Gym'),
  createData('18:00 - 20:00', '', 'Power Lifting', '', '', '', 'Open Gym', ''),
  createData('20:00 - 22:00', 'Cross Fit Class', '', '', '', 'Shoulders', '', ''),
];

export default function Shedule() {
  return (
    <>
      <HeroSection text="Shedule" value="Pages > Shedule" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, background: '#ffeaddff' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ background: '#FB8942', color: '#ffffff' }}>
                <TableCell sx={{ color: '#ffffff' }}>Timing</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Monday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Tuesday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Wednesday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Thursday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Friday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Saturday</TableCell>
                <TableCell sx={{ color: '#ffffff' }} align="right">Sunday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: '1px' } }}
                >
                  <TableCell component="th" scope="row" sx={{ background: '#1f1f1fff', color: '#ffffff' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.calories}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.fat}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.carbs}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.protein}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.label1}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.label2}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bolder', color: '#fB8942' }}>{row.label3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>


      <Container>
        <Email />
      </Container>
      <Footer />
    </>
  );
}
