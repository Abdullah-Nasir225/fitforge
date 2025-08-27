import React from 'react'
import HeroSection from '../components/HeroSection';
import { Grid, Container, Box } from '@mui/material';
import Email from '../components/Email';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';


export default function Pricing() {
  const CardValues = [
    {
      label: 'Basic',
      price: 'PKR2,999',
      duration: '/Month',
      offer: 'A good choice when working remotely With Your Clients ',
      list1: 'Review Your Question',
      list2: 'Work With Resources',
      list3: 'Personal Guidelines to keep you fit',
      list4: 'Community WhatsApp group access',
      list5: 'Review Your Question',
    },
    {
      label: 'Ultra',
      price: 'PKR3,999',
      duration: '/Month',
      offer: 'A good choice when working physically With Your Clients ',
      list1: '5 Workout sessions per week',
      list2: 'Full gym access (all hours)',
      list3: 'Customized diet plan',
      list4: '4 Personal training sessions/month',
      list5: 'Community WhatsApp group access',
    },
    {
      label: 'Pro',
      price: 'PKR4,999',
      duration: '/Month',
      offer: 'For serious fitness goals complete transformation',
      list1: 'Unlimited gym access',
      list2: 'Daily workout plan with feedback',
      list3: '24/7 VIP WhatsApp support',
      list4: 'Community WhatsApp group access',
      list5: '1-on-1 Zoom coaching calls',
    },
  ]

  return (
    <div>
      <HeroSection value="Home > Pricing" text="Pricing" />
      <Container className=' '>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
        <Box className="large-sep "></Box>
      </Container>
      <Container >
        <Grid container spacing={5}>
          {
            CardValues.map((element, key) => {
              return <Grid key={key} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
                <PricingCard label={element.label} price={element.price} offer={element.offer}
                  list1={element.list1} list2={element.list2} list3={element.list3} list4={element.list4}
                  list5={element.list5}
                />
              </Grid>
            })
          }
        </Grid>

      </Container>
      <Container><Email /></Container>
      <Footer />
    </div>
  )
}
