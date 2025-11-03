import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('img')({
  height: 40,
  marginRight: 10,
});

const DashboardPage = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Logo src="/logo.png" alt="App Logo" />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Period Tracker & Care App
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Message */}
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80vh"
          textAlign="center"
        >
          <Typography variant="h4" gutterBottom>
            Welcome to Your Personal Health Companion
          </Typography>
          <Typography variant="body1">
            Track your cycles, manage symptoms, and stay on top of your wellness journey.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default DashboardPage;