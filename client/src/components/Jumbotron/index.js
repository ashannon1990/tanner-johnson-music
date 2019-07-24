import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './style.css'




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Jumbotron({children}) {
  const classes = useStyles();

  return (
    <div>
      <Paper id="jumbotron" style={{backgroundBlendMode: 'overlay'}} className={classes.root}>
        {children}
      </Paper>
    </div>
  );
}