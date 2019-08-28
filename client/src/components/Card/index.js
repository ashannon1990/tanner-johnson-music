import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Photo from '../../photos/Tanner8.jpg'
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
            Tanner Johnson
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          I am a musician, multi instrumentalist, and composer local to Central Florida that specializes in weddings and corporate events. Check out some of my work and feel free to contact me about your upcoming event.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary" href='/contact'>
          Contact me
        </Button>
      </CardActions> */}
    </Card>
  );
}