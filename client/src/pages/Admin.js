import React, { Component } from 'react';
import AddNewShow from '../components/AddNewShow';
import DisplayMessages from '../components/DisplayMessages'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';


class Admin extends Component {
  addUpcomingEvent = (event, eventData) => {
    event.preventDefault();
    console.log(eventData);
    API.addUpcomingEvent(eventData).then((res) => console.log(res));
  };

  getMessages = () => {
    API.getMessages(this.state.messages)
      .then(res =>
        this.setState({
          message: res.data
        })
      )
      .catch(() =>
        this.setState({
          messages: [],
          message: "No New Messages"
        })
      );
  };

  render() {
    return (
      <Container maxWidth='lg'>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={9} md={6}>
              <Paper style={{ margin: '20px', opacity: '.8' }}>
                <Typography style={{ textAlign: 'center' }} variant="h4">Add New Shows Here</Typography>
                <AddNewShow addUpcomingEvent={this.addUpcomingEvent} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <DisplayMessages />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Admin