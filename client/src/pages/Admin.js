import React, { Component } from 'react';
import AddNewShow from '../components/AddNewShow';
import MyTable from '../components/MyTable'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';
import moment from 'moment'


class Admin extends Component {
  state = {
    headers: ['Name', 'Email', 'Message', 'Date'],
    rows: []
  }

  addUpcomingEvent = (event, eventData) => {
    event.preventDefault();
    console.log(eventData);
    API.addUpcomingEvent(eventData).then((res) => console.log(res));
  };

  componentDidMount() {
    // const message = this.state.message;
    API.getMessages(this.messageData)
      .then(res => {
        console.log(res.data)
        const messageArray = res.data.map(data => [data.name, data.email, data.message, moment(data.date).format("M/DD/YYYY hh:mm a")])
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
  };



  render() {
    return (
      <Container maxWidth='lg'>
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
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Admin