import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "motion/react"
import { Container, Button, Grid } from '@mui/material';
import { Email, AccessTime, Call, KeyboardArrowDown } from '@mui/icons-material';
import pic from '../assests/img/logo.png';
import GoToTop from './GoToTop';
import nav from '../assests/img/navbar.png'

const Navbar = () => {
    const stick = useRef('');
    const showlist = useRef(null);
    const rot1 = useRef(null);
    const rot2 = useRef(null);
    const rotnone = useRef(null);
    const [list, setList] = useState(false);
    const myref = useRef(null);
    const activeLoc = useLocation('/');
    const [toggle, setToggle] = useState(false);

    function stickyTop() {
        if (window.scrollY > 300) {
            stick.current.classList.add('stickTop')
        }
        else {
            stick.current.classList.remove('stickTop')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stickyTop)
        myref.current.classList.add('show');
        showlist.current.classList.add('show-list')
    }, [stick])

    const menu = () => {
        if (toggle == true) {
            myref.current.classList.toggle('show');
            rot1.current.classList.toggle('rotate1');
            rot2.current.classList.toggle('rotate2');
            rotnone.current.classList.toggle('show-list')
            setToggle(false)
        }
        else {
            myref.current.classList.toggle('show');
            rot1.current.classList.toggle('rotate1');
            rot2.current.classList.toggle('rotate2');
            rotnone.current.classList.toggle('show-list')
            setToggle(true)
        }
    }
    const ListAppear = () => {
        if (list == true) {
            showlist.current.classList.toggle('show-list')
            setList(false)
        }
        else {
            showlist.current.classList.toggle('show-list')
            setList(true)
        }
    }
    const ListItem = () => {
        if (toggle == true) {
            myref.current.classList.toggle('show');
            rot1.current.classList.toggle('rotate1');
            rot2.current.classList.toggle('rotate2');
            rotnone.current.classList.toggle('show-list')
            showlist.current.classList.toggle('show-list')
            setList(false)
            setToggle(false)
        }
        else {
            myref.current.classList.toggle('show');
            rot1.current.classList.toggle('rotate1');
            rot2.current.classList.toggle('rotate2');
            rotnone.current.classList.toggle('show-list')
            showlist.current.classList.toggle('show-list')
            setList(true)
            setToggle(true)
        }
    }


    return (
        <>
            <Container maxWidth={false} disableGutters sx={{
                backgroundImage: `url(${nav})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
            }}>

                <Container disableGutters className='time' >

                    <Grid container spacing={2}>
                        <Grid size={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                            <Email color='primary' fontSize="small" />
                            <p>info@example.com</p>
                        </Grid>
                        <Grid size={3}>

                        </Grid>
                        <Grid size={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                            <AccessTime color='primary' fontSize="small" />
                            <p>Time 06:00 AM To 08:00 PM</p>
                        </Grid>
                        <Grid size={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                            <Call color='primary' fontSize="small" />
                            <p>+92 30405-26976</p>
                        </Grid>
                    </Grid>
                </Container>

                <Container disableGutters maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div ref={stick} className="container flex ">
                        <div className="  img-nav">
                            <Link to="/"><img src={pic} alt="img" height="100%" className='nav-img' /></Link>
                        </div>
                        <div ref={myref} className="container main-nav">
                            <nav>
                                <li>
                                    <Link to="/" onClick={menu} className={activeLoc.pathname == '/' ? 'active' : 'disactive'}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/About" onClick={menu} className={activeLoc.pathname == '/About' ? 'active' : 'disactive'}>About</Link>
                                </li>
                                <li>
                                    <Link to="/Services" onClick={menu} className={activeLoc.pathname == '/Services' ? 'active' : 'disactive'}>Services</Link>
                                </li>
                                <li>
                                    <Link to="/Pricing" onClick={menu} className={activeLoc.pathname == '/Pricing' ? 'active' : 'disactive'}>Pricing</Link>
                                </li>
                                <li className='drop-li'>
                                    <Link to="" onClick={ListAppear} className={activeLoc.pathname == '/Pages' ? 'active' : 'disactive'}>Pages</Link>
                                    {!list ? <KeyboardArrowDown sx={{ position: 'absolute', right: 15, top: 5, cursor: 'pointer' }} onClick={ListAppear} fontSize="small" /> : ''}
                                    <ul className="dropdown" ref={showlist}>

                                        <li align="left" >
                                            <Link to="/Shedule" onClick={ListItem} >Shedule</Link>
                                        </li>
                                        <li align="left" >
                                            <Link to="/Trainers" onClick={ListItem}>Trainers</Link>
                                        </li>
                                        <li align="left" >
                                            <Link to="/Calculator" onClick={ListItem} >Calculator</Link>
                                        </li>
                                        <li align="left" >
                                            <Link to="/faq" onClick={ListItem} >FAQ's</Link>
                                        </li>
                                        <li align="left" >
                                            <Link to="/appointment" onClick={ListItem} >Appointment</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={menu} className={activeLoc.pathname == '/contact' ? 'active' : 'disactive'}>Contact</Link>
                                </li>
                                <Link to="/login">
                                    <li>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            onClick={menu}
                                            sx={{ color: 'white', fontWeight: 500, marginLeft: '5px', marginBottom: '5px' }}
                                        >Login</Button>
                                    </li>
                                </Link>
                                <Link to="/signup">
                                    <li>

                                        <Button
                                            variant='contained'
                                            color='primary'
                                            onClick={menu}
                                            sx={{ color: 'white', fontWeight: 500, marginLeft: '5px', marginBottom: '5px' }}
                                        >SignUp</Button>
                                    </li>
                                </Link>
                            </nav>

                        </div>
                        <div className="span dis" onClick={menu} >
                            <span ref={rot1}></span>
                            <span ref={rotnone}></span>
                            <span ref={rot2}></span>
                        </div>

                    </div>
                </Container>
            </Container>
            <GoToTop />
        </>
    )
}
export default Navbar;
