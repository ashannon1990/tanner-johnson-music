import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
          image="https://static.wixstatic.com/media/a54007_c9e2abda361d4805b946173a2fcf6d83~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_406,h_640,al_c,q_80,usm_0.66_1.00_0.01/a54007_c9e2abda361d4805b946173a2fcf6d83~mv2_d_3456_5184_s_4_2.webp"
          title="Tanner Johnson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tanner Johnson
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          I'm Tanner. I play music. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. I Specialize in weddings and corporate events. You should hire me.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact me
        </Button>
      </CardActions>
    </Card>
  );
}