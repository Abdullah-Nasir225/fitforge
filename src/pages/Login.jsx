import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AlertBox from '../components/AlertBox';
import { Container, Box, TextField, Button, Stack, FormLabel } from '@mui/material';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { auth } from '../Firebase';


export default function Login() {
    const [clr, setClr] = useState('')
    const [msg, setMsg] = useState('');
    const [alert, setAlert] = useState(false)
    const home = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const signin = await signInWithEmailAndPassword(auth, email, pass);
            if (signin) {
                console.log("The user Login Successfully!");
                setEmail('');
                setPass('');
                setAlert(true)
                setClr('success');
                setMsg("User Logged In Successfully!")
                setTimeout(() => {
                    home('/appointment');
                }, 2000)
                sessionStorage.setItem('email', auth.currentUser.email)
            }
        } catch (error) {
            console.log("Your error is ", error.message);
            setAlert(true);
            setClr('warning');
            setMsg("Invalid Credentials!")
            setTimeout(() => {
                setAlert(false)
            }, 2000)
        }

    }

    return (
        <div>
            {alert ? <AlertBox value={msg} clr={clr} /> : ''}
            <HeroSection text="Login" value="Already have Account" />

            <Container className=' '>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
            </Container>
            <Container className='d-flex'>
                <Box sx={{ border: '1px solid silver', borderRadius: '5px', p: 1, width: { xs: '90%', sm: '70%', md: '50%', lg: '50%', xl: '50%' } }}>
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2}>

                            <FormLabel>Enter Email</FormLabel>
                            <TextField label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} size="small" type="email" required />

                            <FormLabel>Enter Password</FormLabel>
                            <TextField label="Password" value={pass} onChange={(e) => setPass(e.target.value)} size="small" type="password" required />

                            <Button variant="contained" type="submit" sx={{ color: '#ffffff' }}>Login</Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
            <Container className=' '>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
            </Container>
            <Footer />
        </div>
    )
}
