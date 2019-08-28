import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NotAuthorized() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' style={{ minHeight: '90vh' }}>
      <Card className={classes.card} style={{marginTop: '20px'}}>
        <CardContent>
          <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
            You are not authorized to view this content
        </Typography>
          <Typography variant="body2" component="p">
            If you are authorized, go to the sign in page
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/signin">Sign in</Button>
        </CardActions>
      </Card>
    </Container>
  );
}