import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';

import {
  Link,
  NavLink
} from "react-router-dom";
import { Router } from '@material-ui/icons';

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
  inicio: {
    marginLeft: theme.spacing(2),
    color:"black",
    textAlign:"right",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
 
    <div className={classes.root}>
      <AppBar color="white"position="static">
        <Toolbar> 
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <DescriptionIcon  />
          </IconButton>
          <Link variant="h6" className={classes.menuButton} to="/">
            Clack
          </Link>      
          <Link variant="h6" className={classes.inicio} to="/login">
            Iniciar Sesión
          </Link>    
        </Toolbar>
      </AppBar>
    </div>
    
  );
}