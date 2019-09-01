import React, { Component } from 'react';
import AddNewShow from '../components/AddNewShow';
import MyTable from '../components/MyTable'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';
import moment from 'moment';
import Button from '@material-ui/core/Button';



class Admin extends Component {
  state = {
    headers: ['Name', 'Email', 'Message', 'Date'],
    rows: [],
    headersEvents: ['Venue', 'Address', 'Date', 'Time'],
    rowsEvents: []
  }

  addUpcomingEvent = (event, eventData) => {
    event.preventDefault();
    console.log(eventData);
    API.addUpcomingEvent(eventData).then((res) => console.log(res));
  };

  handleMessageDelete = id => {
    API.deleteMessage(id).then(res => API.getMessages());
    window.location.reload();
  }

  handleEventDelete = id => {
    API.deleteEvent(id).then(res => API.getEvents());
    window.location.reload();
  }

  componentDidMount() {
    // const message = this.state.message;
    API.getMessages(this.messageData)
      .then(res => {
        console.log(res.data)
        const messageArray = res.data.map(data => [data.name, data.email, data.message, moment(data.date).format("M/DD/YYYY hh:mm a"), <Button style={{background: '#333333', color: 'white'}} onClick={() => this.handleMessageDelete(data._id)}>Delete</Button>])
        console.log(messageArray)
        this.setState({
          rows: messageArray
        })
      }
      )
      .catch(() =>
        this.setState({
          messages: [],
          message: "No New Messages"
        })
      );
      API.getEvents(this.messageData)
      .then(res => {
        console.log(res.data)
        let eventArray = res.data.map(data => [data.venueName, data.venueAddress, moment(data.eventDate).format("M/DD/YYYY"), data.eventTime, <Button style={{background: '#333333', color: 'white'}} onClick={() => this.handleEventDelete(data._id)}>Delete</Button>,]);
        eventArray = eventArray.sort((a, b) => {
          return (a[2] > b[2]) ? 1 : -1;
        });
        console.log(eventArray);
        this.setState({
          rowsEvents: eventArray
        })
      }
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
      <Container maxWidth='lg' style={{minHeight: '90vh'}}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Paper style={{ margin: '20px', opacity: '.8' }}>
                <Typography style={{ textAlign: 'center' }} variant="h4">Add New Shows Here</Typography>
                <AddNewShow addUpcomingEvent={this.addUpcomingEvent} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <MyTable headers={this.state.headers} rows={this.state.rows} />
              <MyTable headers={this.state.headersEvents} rows={this.state.rowsEvents} />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Admin