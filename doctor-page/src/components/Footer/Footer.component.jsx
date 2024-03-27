import { Box, Typography } from '@mui/material'
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <footer>
            <Box sx={{
                textAlign: 'center',
                padding: '1rem',
                lineHeight: '3 rem',
                backgroundColor: '#333',
                color: 'white'
            }}>
                <Typography sx={{fontWeight: 'bold', fontSize: '1.5rem'}}>
                    Corcho
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
                        <InstagramIcon 
                        sx={{
                            marginRight: '10px',
                            color: 'white',
                            transition: 'color 0.3s easy',
                            '&:hover':{
                                color: 'rgb(0,0,255)'
                            },
                        }}/>
                    </a>
                    <a href="https://www.facebook.com/" target='blank' rel='noopener noreffer'>
                        <FacebookIcon 
                        sx={{
                            marginRight: '10px',
                            color: 'white',
                            transition: 'color 0.3s easy',
                            '&:hover':{
                                color: 'rgb(0,0,255)'
                            },
                        }}/>
                    </a>
                    <a href="https://www.linkedin.com/" target='blank' rel='noopener noreffer'>
                        <LinkedInIcon 
                        sx={{
                            marginRight: '10px',
                            color: 'white',
                            transition: 'color 0.3s easy',
                            '&:hover':{
                                color: 'rgb(0,0,255)'
                            },
                        }}/>
                    </a>
                </Box>
                <Typography
                sx={{
                    fontStyle: 'italic'
                }}>
                    Powered by Rodriillanes
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer