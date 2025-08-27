import React from 'react'
import { TextField, Button, Typography, Grid, Container, Box } from '@mui/material';
import DialogBox from './DialogBox';

export default function Email() {
    return (
        <>
            <Container>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
            </Container>
            <Container disableGutters sx={{ backgroundColor: '#fc7d2eff', padding: '2rem', transform: 'skew(-5deg)' }}>
                <Grid container spacing={1} >
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ padding: '1rem' }}>
                        <Typography
                            variant='p'
                            sx={{ fontSize: '4rem', fontWeight: 'bolder', textAlign: 'center', fontSize: { lg: '2rem', xs: '1.2rem', sm: '2rem', md: '2rem', xl: '2.3rem' }, color: 'white', }}
                        >
                            Subscribe To Our Newsletter
                        </Typography>
                    </Grid>
                    <Grid className='  d-flex' size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}  >
                        <DialogBox />
                    </Grid>

                </Grid>
                {/* Footer */}
            </Container>
        </>
    )
}
