import React, { useEffect, useState } from 'react'
import { ArrowUpward } from '@mui/icons-material';
import { Container, Button } from '@mui/material';

const GoToTop = () => {

    const Top = () => {
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(() => {
        window.addEventListener('scroll', Appear)
    })
    const [see, setSee] = useState(false)
    function Appear() {
        if (window.scrollY > 300) {
            setSee(true)
        }
        else {
            setSee(false)
        }
    }
    return (
        <div>

            <Button
                onClick={Top}
                variant='contained'
                sx={{ position: 'fixed', bottom: '5%', right: '5%', height: '3rem', width: '10px', display: see?'block':'none',zIndex:1010 }}

            >
                <ArrowUpward sx={{ color: 'white' }} />
            </Button>
        </div>
    )
}

export default GoToTop
