import React, { Component } from 'react';
import MyTable from '../components/MyTable'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';
import moment from 'moment'


class Events extends Component {
  state = {
    headers: ['Venue', 'Address', 'Date', 'Time'],
    rows: []
  }


  componentDidMount() {
    // const message = this.state.message;
    API.getEvents(this.eventData)
      .then(res => {
        console.log(res.data)
        let eventArray = res.data.map(data => [data.venueName, data.venueAddress, moment(data.eventDate).format("M/DD/YYYY"), data.eventTime])
        eventArray = eventArray.sort((a, b) => {
          return (a[2] > b[2]) ? 1 : -1;
        })
        console.log(eventArray)
        this.setState({
          rows: eventArray
        })
      }
      )
      .catch(() =>
        this.setState({
          messages: [],
          message: "No New Events"
        })
      );
  };



  render() {
    return (
      <Container maxWidth='lg' style={{minHeight: '90vh'}}>
        <div>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={8}>
            <Paper style={{ margin: '20px', opacity: '.8' }}>
            <Typography style={{ textAlign: 'center' }} variant="h4">Upcoming Events</Typography>
              <MyTable headers={this.state.headers} rows={this.state.rows} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Events