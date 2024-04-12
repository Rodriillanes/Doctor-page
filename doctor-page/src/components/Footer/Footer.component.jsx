import { Box, Typography } from '@mui/material'
import React from 'react'
import './Footer.component.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <footer>
            <Box className='box'>
                <Typography className='clinic'>
                    Maria Canda
                </Typography>
                <Typography>
                    &copy; {new Date().getFullYear()} Maria Canda. All rights reserve
                </Typography>
                <Typography>
                    123 calle principal, Ciudad, Estado, País
                </Typography>
                <Typography>
                    +591 12345678
                </Typography>
                <Typography>
                    info@example.com
                </Typography>
                <Box>
                    <a href="https://www.instagram.com/" target='blank' rel='noopener noreffer'>
                        <InstagramIcon className='socialIcons'/>
                    </a>
                    <a href="https://www.facebook.com/" target='blank' rel='noopener noreffer'>
                        <FacebookIcon className='socialIcons'/>
                    </a>
                    <a href="https://www.linkedin.com/" target='blank' rel='noopener noreffer'>
                        <LinkedInIcon className='socialIcons'/>
                    </a>
                </Box>
                <Typography className='powered'>
                    Powered by Rodriillanes
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer