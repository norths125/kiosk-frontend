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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      
      <Link color="inherit" href="https://mui.com/">

      </Link>{' '}

      {'.'}
    </Typography>
  );
}

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
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Stack direction="row" spacing={2} >
            <Card
                  sx={{ height: '40px', display: 'flex', flexDirection: 'column' ,width:'40px'}}
                >
                  <CardMedia
                    component="img"
                    sx={{// 16:9 
                      pt: '0%',
                    }}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem_of_the_Expressway_Authority_of_Thailand.svg/600px-Emblem_of_the_Expressway_Authority_of_Thailand.svg.png"
                    alt="random"></CardMedia>
                    </Card>
                    <a>ทางการพิเศษแห่งประเทศไทย</a>
          <Button variant="variant" color="inherit" onClick={HOME}>HOME</Button>
          <Button variant="variant" color="inherit" onClick={MANAGE}>MANAGE</Button>
          <Button variant="variant" color="inherit" onClick={LIVE}>LIVE</Button>
          <Button variant="variant" color="inherit" onClick={PROFILE}>PROFILE</Button>
          <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
          </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{// 16:9 
                      pt: '56.25%',
                    }}
                    image="https://www.exat.co.th/wp-content/uploads/2020/11/exat-project.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Kiosk ID: xxx
                    </Typography>
                    <Typography>
                      Kiosk floor : xx , 
                      Detail : xxxxxx
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      
        <Copyright />
    </ThemeProvider>
  );
}