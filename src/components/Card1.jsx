import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card1({ heading, subheading, para, back, btnClr }) {
    return (
        <Card sx={{ minWidth: 275, padding: '1rem', backgroundColor: `${back}`,minHeight:'5rem' }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'white', fontSize: 14, fontWeight: 'bolder', textAlign: 'left' }}>
                    {heading}
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bolder', textAlign: 'left' }}>
                    {subheading}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: '400', textAlign: 'left', fontSize: 16 }}>
                    well meaning and kindly.
                    <br />
                    {para}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to='/Services'>
                    <Button
                        size='large'
                        sx={{ color: 'white', fontWeight: 'bolder', transform: 'skew(-5deg)', background: `${btnClr}` }}
                        variant='contained'
                    >Read More</Button></Link>
            </CardActions>
        </Card>
    );
}
