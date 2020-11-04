import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Stepper from "./Stepper"
import { useHistory } from "react-router-dom";
import {auth} from "../firebase-config" 
import firebase from '../firebase-config';


firebase.analytics().logEvent('entro a  legalizar');

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


  if(auth.currentUser === null){
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