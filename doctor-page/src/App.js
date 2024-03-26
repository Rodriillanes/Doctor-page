import './App.css';
import { Box, ThemeProvider, createTheme } from '@mui/material';

// components
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/Home/Home.component';
import AboutUs from './components/AboutUs/AboutUs.component';
import ContactForm from './components/ContactForm/ContactForm.component';
import Footer from './components/Footer/Footer.component';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Home />
        <AboutUs />
        <ContactForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
