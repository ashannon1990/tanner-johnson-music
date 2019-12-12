import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia,
  Typography,
  Grid 
} from '@material-ui/core';
import Photo from '../../photos/Tanner2.jpg'
import './style.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 500
  },
});

export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id="bioCard" style={{ margin:'auto' }}>
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
          <Typography variant="body2" color="textSecondary" component="ul" style={{color: 'black'}}>
          Instruments:
            <li>Violin</li>
            <li>Guitar</li>
            <li>Mandolin</li>
            <li>Cello</li>
            <li>Piano</li>
          </Typography>
          
          </Grid>
          <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="ul" style={{color: 'black'}}>
          Genres:
            <li>Classical</li>
            <li>Jazz</li>
            <li>Rock</li>
            <li>Pop</li>
            <li>Bluegrass</li>
          </Typography>
          </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}