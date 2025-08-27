import React from 'react'
import { Grid, Container, Box } from '@mui/material';
import Email from '../components/Email';
import Footer from '../components/Footer';
import TrainerCard from '../components/TrainerCard';
import trainer1 from '../assests/img/trainer1.png'
import trainer2 from '../assests/img/trainer2.png'
import trainer3 from '../assests/img/trainer3.png'
import trainer4 from '../assests/img/trainer4.png'
import trainer5 from '../assests/img/trainer5.png'
import HeroSection from '../components/HeroSection';
import trainer6 from '../assests/img/trainer6.png'
export default function Trainers() {

  const CardValues = [
    {
      key: 1,
      trainer: 'Irfan',
      work: 'Yoga Trainer',
      img: `${trainer1}`
    },
    {
      key: 2,
      trainer: 'Ali',
      work: 'Gym Trainer',
      img: `${trainer2}`
    },
    {
      key: 3,
      trainer: 'Alisha',
      work: 'Personal Trainer',
      img: `${trainer3}`
    },
    {
      key: 4,
      trainer: 'Babar',
      work: 'Body Trainer',
      img: `${trainer4}`
    },
    {
      key: 5,
      trainer: 'Asma',
      work: 'Body Builder',
      img: `${trainer5}`
    },
    {
      key: 6,
      trainer: 'Umar',
      work: 'Muscles Trainer',
      img: `${trainer6}`
    }
  ]
  return (
    <div>

      <HeroSection value="Pages > Trainer" text="Trainers" />
      <Container >
        <Grid container spacing={5}>
          {
            CardValues.map((element) => {
              return <Grid key={element.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
                <TrainerCard src={element.img} trainer={element.trainer} work={element.work} />
              </Grid>
            })
          }
        </Grid>

      </Container>
      <Email />
      <Footer />
    </div>
  )
}
