import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="white"position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <DescriptionIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Clack
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}