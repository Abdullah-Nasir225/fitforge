import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Stack, FormLabel } from '@mui/material';
import AlertBox from '../components/AlertBox';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { auth, db } from '../Firebase';
import { setDoc, doc } from 'firebase/firestore';

export default function Signup() {
    const [clr, setClr] = useState('')
    const [msg, setMsg] = useState('');
    const [alert, setAlert] = useState(false)
    const home = useNavigate();
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            const user = auth.currentUser;
            sessionStorage.setItem('email', user.email);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    fName: fName,
                    lName: lName,
                })
                setfName('');
                setlName('');
                setEmail('');
                setPass('');
                setAlert(true)
                setClr('success');
                setMsg("Account Created Successfully!")
                setTimeout(() => {
                    home('/appointment');
                }, 2000)
            }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setMsg("The user with this email already exists");
            }
            else if (error.code === 'auth/weak-password') {
                setMsg("Password must be atleast 6 characters long!");
            }
            else {
                setMsg("Something went wrong!", error.message)
            }

        }

    }

    return (
        <div>
            {alert ? <AlertBox value={msg} clr={clr} /> : ''}
            <HeroSection text="Signup" value="Create an Account" />
            <Container className=' '>
                <Box className="large-sep "></Box>
                <Box className="large-sep "></Box>
            </Container>
            <Container className='d-flex'>
                <Box sx={{ border: '1px solid silver', borderRadius: '5px', p: 1, width: { xs: '90%', sm: '70%', md: '50%', lg: '50%', xl: '50%' } }}>
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2}>

                            <FormLabel>First Name</FormLabel>
                            <TextField label="First Name" value={fName} onChange={(e) => setfName(e.target.value)} size="small" type="name" required />

                            <FormLabel>Last Name</FormLabel>
                            <TextField label="Last Name" value={lName} onChange={(e) => setlName(e.target.value)} size="small" type="name" required />

                            <FormLabel>Enter Email</FormLabel>
                            <TextField label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} size="small" type="email" required />

                            <FormLabel>Enter Password</FormLabel>
                            <TextField label="Password" value={pass} onChange={(e) => setPass(e.target.value)} size="small" type="password" required />

                            <Button variant="contained" type="submit" sx={{ color: '#ffffff' }}>SignUp</Button>
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
