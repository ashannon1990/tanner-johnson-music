import React from 'react';
import Contact from '../components/Contact/index'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

export default function ContactField() {
  return (
    <Container maxWidth='lg'>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9} md={6}>
            <Paper style={{ margin: '20px', opacity: '.8' }}>
              <Typography style={{ textAlign: 'center' }} variant="h4">If you are interested in hiring me for your event, leave me a message.</Typography>
              <Contact />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}