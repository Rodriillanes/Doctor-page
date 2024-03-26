import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return(
        <footer>
            <Box sx={{
                textAlign: 'center',
                padding: '1rem',
                lineHeight: '3 rem',
                backgroundColor: '#333'
            }}>
                <Typography sx={{fontWeight: 'bold', fontSize: '1.5rem'}}>
                    Corcho
                </Typography>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
            </Box>
        </footer>
    )
}

export default Footer