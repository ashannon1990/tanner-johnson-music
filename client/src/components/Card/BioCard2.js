import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Photo from '../../photos/Tanner2.jpg'
import './style.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id="bioCard">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tanner Johnson"
          height="300"
          image={Photo}
          title="Tanner Johnson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            What I Play
          </Typography>
          <Grid container spacing={4}
                alignItems="center"
                justify="center">
                <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
          Instruments:
          <ul>
            <li>Violin</li>
            <li>Guitar</li>
            <li>Mandolin</li>
            <li>Cello</li>
            <li>Piano</li>
          </ul>
          </Typography>
          
          </Grid>
          <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
          Genres:
          <ul>
            <li>Classical</li>
            <li>Jazz</li>
            <li>Rock</li>
            <li>Pop</li>
            <li>Bluegrass</li>
          </ul>
          </Typography>
          </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" href='/contact'>
          Contact me
        </Button> */}
      </CardActions>
    </Card>
  );
}