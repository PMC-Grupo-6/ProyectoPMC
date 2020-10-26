import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Stepper from "./Stepper"
import { useFirebaseApp } from "reactfire";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const history = useHistory()
  const firebase = useFirebaseApp();

  if(firebase.auth().currentUser === null){
    history.push("/login")
  }



  return (
    <Card className={classes.root}>
        <CardContent>
          <Stepper />
        </CardContent>
    </Card>
  );
}