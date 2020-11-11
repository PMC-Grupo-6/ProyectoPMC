import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import { auth } from "../firebase-config";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  inicio: {
    marginLeft: theme.spacing(2),
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  var user = auth.currentUser;

  return (
    <div className={classes.root}>
      <AppBar color="white" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <DescriptionIcon />
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h6">Clack</Typography>
            <Button
              style={{ marginLeft: "16px" }}
              component={Link}
              variant="outlined"
              to="/"
            >
              Legalizar
            </Button>
          </div>
          <Button
            component={Link}
            variant="contained"
            color="primary"
            className={classes.inicio}
            to="/login"
          >
            {user ? "Mi cuenta" : "Iniciar Sesión"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
