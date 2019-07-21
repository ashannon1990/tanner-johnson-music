import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './style.css'
// import JumbotronBackground from '../../photos/Tanner6.jpg'



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