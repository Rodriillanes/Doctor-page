import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Home.component.css'

const Home = () => {
    return(
     <Box className='container'>
        <Typography className='welcome'>
            BIENVENIDO A MARIA CANDA  
        </Typography>
        <Box className='subContainer'>
            <Box>
                <Typography>
                    
                </Typography>
                <Button>
                    Contáctanos
                </Button>
            </Box>
        </Box>
     </Box>
    )
}

export default Home