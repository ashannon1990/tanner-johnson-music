import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'gray',
    minHeight: '50vh',
    fontSize: '50px'
  },
  card: {
    maxWidth: 345,
    background: 'none',
    boxShadow: 'none'
  },
  media: {
    height: 300,
    boxShadow:  '0px 0px 10px black',
    overflow: 'auto'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.grid} item xs={12}>
          <Paper className={classes.paper}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://static.wixstatic.com/media/a54007_c9e2abda361d4805b946173a2fcf6d83~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_406,h_640,al_c,q_80,usm_0.66_1.00_0.01/a54007_c9e2abda361d4805b946173a2fcf6d83~mv2_d_3456_5184_s_4_2.webp"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weddings
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I play weddings and stuff, you should hire me for yours
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{alignContent: 'center'}}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}