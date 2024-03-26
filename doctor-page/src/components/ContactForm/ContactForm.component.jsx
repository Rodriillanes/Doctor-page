import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactForm = () => {
    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh'
        }}>
            <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width:442px)':{
                    fontSize: '1.5rem',
                },
            }}>
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
                <Button
                    sx={{
                        backgroundColor: 'gray',
                        color: 'white',
                        marginTop: '1rem',
                        transition: 'transform 0.3 s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
                        }
                    }}>
                    Enviar
                </Button>
            </Box>
        </Container>
    )
}

export default ContactForm