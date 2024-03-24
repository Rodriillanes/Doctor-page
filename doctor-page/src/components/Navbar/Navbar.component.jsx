import { AppBar, IconButton, ThemeProvider, Toolbar, createTheme, styled, Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import { Menu as MenuIcon } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const StyldeButton = styled(Button) ({
  marginleft: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  border: 0,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: 'none',
  transition: 'transform 0.3s',
  '&:hover':{
    transform: 'scale(1.05)',
    backgroundImage: 'linear-gradient(to bottom, #003eff, #003eff)',
  },
})

const Navbar = () => {
    const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen)
    }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton color='inherit' onClick={toggleDrawer}>
              <MenuIcon />
          </IconButton>
          <div className='Nav-buttons'>
              <StyldeButton>Home</StyldeButton>
              <StyldeButton>Acerca de nosotros</StyldeButton>
              <StyldeButton>Contáctanos</StyldeButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItemButton>
            <ListItemText primary="Home"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Acerca de nosotros"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contáctanos"/>
          </ListItemButton>
        </List>
      </Drawer>
    </ThemeProvider>
  )
}

export default Navbar