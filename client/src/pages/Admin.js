import React, { Component } from 'react';
import AddNewShow from '../components/AddNewShow';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';


class AddShow extends Component {
  addUpcomingEvent = (event, eventData) => {
    event.preventDefault();
    console.log(eventData);
      API.addUpcomingEvent(eventData).then((res) => console.log(res));
  };

  render() {
    return (
      <Container maxWidth='lg' style={{ marginTop: '100px' }}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={9} md={5}>
              <Paper>
                <Typography style={{ textAlign: 'center' }} variant="h4">Add New Shows Here</Typography>
                <AddNewShow />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default AddShow