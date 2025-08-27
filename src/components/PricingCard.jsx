import React from 'react'
import { Grid, Button, Typography, CardMedia, Card, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { CheckCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function PricingCard({ label, price, offer, list1, list2, list3, list4, list5 }) {
    return (
        <div>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} sx={{ position: 'relative' }}>

                <Box
                    sx={{
                        backgroundColor: '#181818ff', minWidth: 300, padding: '0 1rem 0 1rem',
                        '&:hover': {
                            backgroundColor: '#FB8942'
                        },
                        '&:hover .typo': {
                            color: '#ffffff'
                        },
                        '&:hover .butn': {
                            color: 'white',
                            borderColor: 'white',
                            backgroundColor: 'black'
                        },
                        '&:hover .price': {
                            color: 'black',
                        },
                        '&:hover .label': {
                            background: '#181818ff',
                        }
                    }}
                >
                    <Box sx={{ marginLeft: '15px', padding: '2', width: '30%', marginBottom: '10px' }} className={`label ${label === 'Basic' ? 'lab' : ''}`}>
                        <Typography
                            className='typo'
                            component='h6'
                            sx={{ fontSize: '18px', fontWeight: '400', textAlign: 'center', }}
                        >
                            {label}
                        </Typography>
                    </Box>
                    <Typography
                        className='price'
                        component='span'
                        sx={{ fontSize: '40px', fontWeight: '700', color: '#FB8942', textAlign: 'left', paddingLeft: 2 }}
                    >
                        {price}
                    </Typography>
                    <span style={{ fontWeight: 450, fontSize: '18px', color: '#ffffffff' }}>/Month</span>
                    <Typography
                        className="typo"
                        component='h6'
                        sx={{ fontSize: '16px', textAlign: 'left', paddingLeft: '5px', paddingTop: '5px', color: '#c9c9c9ff' }}
                    >
                        {offer}
                    </Typography>
                    <Divider color='grey' sx={{ margin: '15px' }} />
                    <Box className='price-list'>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[list1, list2, list3, list4, list5].map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex', alignItems: 'center', marginBottom: 8,
                                    fontSize: '16px', fontWeight: '500', color: '#f5f5f5ff', lineHeight: '2.1'
                                }}>
                                    <CheckCircleRounded sx={{ color: '#ffffff' }} style={{ marginRight: 8 }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box
                        sx={{ padding: '2rem', transform: 'skew(-10deg)' }}
                    ><Link to='/contact' sx={{ textDecoration: 'none', color: 'white' }}>
                            <Button
                                variant='contained'
                                className='butn'
                                sx={{ height: '3rem', textDecoration: 'none', borderRadius: 0, color: '#ffffff', fontWeight: 'bold' }}
                            >Contact Us</Button></Link>
                    </Box>
                </Box>
            </Grid>
        </div>
    )
}
