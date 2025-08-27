import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import test1 from '../assests/img/test1.jpg'
import test2 from '../assests/img/test2.jpg'
import test3 from '../assests/img/test3.jpg'
import test4 from '../assests/img/test4.jfif'
import TextRating from "./TextRating";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container >
            <Slider {...settings}>
                <div >
                    <div className="d-flex">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={test1} sx={{ height: '6rem', width: '6rem', border: '7px solid white' }} />
                        </Stack>
                    </div>
                    <div className="d-flex " >
                        <TextRating />
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            sx={{ fontSize: '1.3rem', fontWeight: '450', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Joining Fit Forge completely transformed my fitness journey. The trainers are super motivating, and the energy here is just unbeatable!
                        </Typography>
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            color="primary"
                            sx={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Hania Mehboob
                        </Typography>
                    </div>

                </div>
                <div>
                    <div className="d-flex">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={test2} sx={{ height: '6rem', width: '6rem', border: '7px solid white' }} />
                        </Stack>
                    </div>
                    <div className="d-flex " >
                        <TextRating />
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            sx={{ fontSize: '1.3rem', fontWeight: '450', textAlign: 'center', padding: '0.5rem' }}
                        >
                            I’ve tried many gyms before, but nothing comes close to the atmosphere and equipment at Fit Forge. Highly recommended!
                        </Typography>
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            color="primary"
                            sx={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Leah Alexenda
                        </Typography>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={test3} sx={{ height: '6rem', width: '6rem', border: '7px solid white' }} />
                        </Stack>
                    </div>
                    <div className="d-flex " >
                        <TextRating />
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            sx={{ fontSize: '1.3rem', fontWeight: '450', textAlign: 'center', padding: '0.5rem' }}
                        >
                            The team at Fit Forge genuinely cares about your goals. With their help, I lost 10kg in just 3 months. Life-changing experience!
                        </Typography>
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            color="primary"
                            sx={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Mia Jeff
                        </Typography>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={test4} sx={{ height: '6rem', width: '6rem', border: '7px solid white' }} />
                        </Stack>
                    </div>
                    <div className="d-flex " >
                        <TextRating />
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            sx={{ fontSize: '1.3rem', fontWeight: '450', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Clean environment, professional trainers, and flexible timing — Fit Forge has everything you need to stay consistent and strong.
                        </Typography>
                    </div>
                    <div className="d-flex " >
                        <Typography
                            variant='p'
                            color="primary"
                            sx={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center', padding: '0.5rem' }}
                        >
                            Steve Anderson
                        </Typography>
                    </div>
                </div>
            </Slider>
        </Container>
    );
}