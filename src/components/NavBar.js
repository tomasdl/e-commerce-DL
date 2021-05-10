import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
}from'@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  }));

const NavBar = () => {
  const classes = useStyles();
return (
  <AppBar position="static">
    <Toolbar className={classes.bgcolor}>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Astillero Lef
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)}

export default NavBar;