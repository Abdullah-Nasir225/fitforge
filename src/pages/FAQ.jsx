import * as React from 'react';
import { AccordionDetails, Accordion, AccordionSummary, Typography, Box } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import Email from '../components/Email';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Container, Grid } from '@mui/material';

export default function FAQ() {
    const faqs1 = [
        {
            'label': 'What services do you offer?',
            'description': 'We provide personalized workout plans, nutrition guidance, and online fitness coaching to help you achieve your health and wellness goals.'
        },
        {
            'label': 'What I need to get started?',
            'description': 'Not necessarily! Many of our programs include bodyweight exercises you can do anywhere. If you have equipment, we can create a customized plan that includes it.'
        },
        {
            'label': 'Are the workout good for beginners?',
            'description': 'Absolutely. Our programs cater to all fitness levels, from complete beginners to advanced athletes.'
        },
        {
            'label': 'How long are the workout sessions?',
            'description': 'Most workouts take between 20–45 minutes, making them easy to fit into your daily schedule.'
        }
    ]
    const faqs2 = [

        {
            'label': 'Can I follow the program from home?',
            'description': 'Yes! All workouts are designed to be flexible — you can do them at home, in the gym, or even outdoors.'
        },
        {
            'label': 'Do you offer nutrition advice?',
            'description': 'Yes, we provide meal plans, healthy recipes, and guidance on portion sizes to support your fitness journey.'
        },
        {
            'label': 'How can I track my progress?',
            'description': 'We recommend keeping a workout journal, tracking body measurements, and taking progress photos. Some of our plans also include progress tracking tools.'
        },
        {
            'label': 'What if I have an injury?',
            'description': 'Always consult your doctor first. We can adjust workout plans to accommodate most health concerns once we understand your condition.'
        },
    ]
    return (
        <div>
            <div>
                <HeroSection text="FAQ's" value="Pages > FAQ's" />
            </div>
            <Container className=' '>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
            </Container>
            <Container>
                <Grid container spacing={{ xs: 0, sm: 0, md: 1, lg: 1, xl: 1 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} >
                        {
                            faqs1.map((element,key) => {
                                return <Accordion key={key} sx={{ margin: '0.5rem' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward sx={{ background: '#FB8942', color: '#ffffff' }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ borderLeft: '5px solid orange', backgroundColor: '#fff5d9ff', transform: 'skew(-5deg)' }}
                                    >
                                        <Typography component="span">{element.label}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {element.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            })
                        }

                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} >
                        {
                            faqs2.map((element) => {
                                return <Accordion sx={{ margin: '0.5rem' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownward sx={{ background: '#FB8942', color: '#ffffff' }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ borderLeft: '5px solid orange', backgroundColor: '#fff5d9ff', transform: 'skew(-5deg)' }}
                                    >
                                        <Typography component="span">{element.label}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {element.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            })
                        }

                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Email />
            </Container>
            <Footer />
        </div >
    );
}
