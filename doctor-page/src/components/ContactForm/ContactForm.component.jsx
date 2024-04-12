import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import './ContactForm.component.css'

const ContactForm = () => {
    return(
        <Container className='form'>
            <Typography className='contact'>
                Contáctanos
            </Typography>
            <Box 
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '2rem',
                    maxWidth: '30rem',
                    width: '100%'
                }}>
                <TextField
                    label='Name'
                    name= 'name'
                    fullWidth
                    required
                    sx={{marginBottom: '1rem'}}
                    inputProps={{style:{color: 'black'}}}
                    InputLabelProps={{style:{color: 'black'}}}>
                </TextField>
                <TextField
                    label='Email'
                    name= 'email'
                    fullWidth
                    required
                    sx={{marginBottom: '1rem'}}
                    inputProps={{style:{color: 'black'}}}
                    InputLabelProps={{style:{color: 'black'}}}>
                </TextField>
                <TextField
                    label='Escribe un mensaje'
                    name= 'message'
                    fullWidth
                    required
                    rows={4}
                    multiline
                    sx={{marginBottom: '1rem'}}
                    inputProps={{style:{color: 'black'}}}
                    InputLabelProps={{style:{color: 'black'}}}>
                </TextField>
                <Button>
                    Enviar
                </Button>
            </Box>
        </Container>
    )
}

export default ContactForm