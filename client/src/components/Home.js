
import React from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';
import NavBar from './NavBar'; 

function Home() {
  return (
    <>
      <NavBar /> {/* 将导航栏加入到页面顶部 */}
      <Container component="main" maxWidth="sm">
        <Paper elevation={6} sx={{ my: 5, p: 3 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to the Monitoring App!
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Your one-stop solution for real-time surveillance.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Home;
