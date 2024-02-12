
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Monitoring App
                    </Typography>
                </Box>
                <Button color="inherit" component={RouterLink} to="/">Home</Button>
                <Button color="inherit" component={RouterLink} to="/history">History</Button>
                <Button color="inherit" component={RouterLink} to="/settings">Settings</Button>
                <Button color="inherit" component={RouterLink} to="/live">Live View</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
