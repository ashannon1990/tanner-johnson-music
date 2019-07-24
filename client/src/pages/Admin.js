import React from 'react';
import AddNewShow from '../components/AddNewShow/index';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Jumbotron from '../components/Jumbotron/index'
import Typography from '@material-ui/core/Typography'

export default function ContactFoeld() {
  return (
    <Container maxWidth='lg' style={{ marginTop: '100px' }}>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9} md={5}>
            <Jumbotron>
            <Typography style={{textAlign: 'center'}} variant="h4">Add New Shows Here</Typography>
              <AddNewShow />
            </Jumbotron>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

