import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Stepper from "./Stepper"

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

  return (
    <Card className={classes.root}>
        <CardContent>
          <Stepper />
        </CardContent>
    </Card>
  );
}