import React ,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Home } from '@mui/icons-material';
import Header from './component/Header';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3333/authen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.status == 'ok'){
            //alert('Authen success')
          }else{
            alert('Authen failed')
            localStorage.removeItem('token');
            window.location = '/login'
          }
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[])

    const handleLogout = (event) =>{
      event.preventDefault();
      localStorage.removeItem('token');
      window.location = '/login'
    }
    const navigate = useNavigate();
    const MANAGE = () => {
      navigate('/Manage');
    };
    const LIVE = () => {
      navigate('/Live');
    };
    const PROFILE = () => {
      navigate('/Profile');
    };
    const HOME = () => {
      navigate('/Home');
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',pt: 8,pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1" variant="h2"
              align="center" color="text.primary"
              gutterBottom
            >
              Kiosk Home
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Coming Soon!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Kiosk</Button>
              <Button variant="outlined">EXAT</Button>
            </Stack>
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}