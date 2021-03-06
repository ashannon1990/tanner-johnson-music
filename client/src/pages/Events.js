import React, { Component } from 'react';
import MyTable from '../components/MyTable'
import { 
  Container,
  Grid,
  Paper,
  Typography 
} from '@material-ui/core';
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
        let eventArray = res.data.map(data => [data.venueName, data.venueAddress, moment(data.eventDate).format("M/DD/YYYY"), moment(data.eventTime, "HH:mm").format("h:mma")]);
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