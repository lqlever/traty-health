import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const topNavItems = ['Sign In', 'En Español', 'Locations', 'Contact Us', 'Help'];
const sideNavItems = ['Personal', 'Small Business', 'Wealth Management', 'Business & Institutions', 'About Us'];

function NavigationAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#004990' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button  href="/" color="inherit">
              Bank of Trayt
            </Button>
          </Typography>
          {topNavItems.map((item, index) => (
            <Button key={index} color="inherit">
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: 400 }}
      >
        <List>
          {sideNavItems.map((item, index) => (
            <ListItem key={index}>
              <Button color="inherit">{item}</Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavigationAppBar;