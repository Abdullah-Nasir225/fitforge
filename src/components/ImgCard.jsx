import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from 'motion/react';

export default function ImageCard({ img }) {
  const Motionbox = motion(Box);
    return (
        <Card sx={{ minWidth: 275, height: '100%' }}>
            <CardContent sx={{ padding: 0, height: '100%', width: '100%' }}>
                
                <Motionbox
                    component='img'
                    whileHover={{scale:1.1}}
                    transition={{duration:0.3,ease:'easeIn'}}
                    src={img}
                    sx={{ objectFit: 'cover' }}
                    alt='box-img'
                    height='100%'
                    width="100%"
                >
                </Motionbox>
            </CardContent>

        </Card>
    );
}
