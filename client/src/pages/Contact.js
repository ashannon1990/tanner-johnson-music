import React, { Component } from 'react';
import Contact from '../components/Contact/index'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API'

class ContactField extends Component {

  saveMessage = (event, messageData) => {
    event.preventDefault();
    if (messageData.name === '') {
      alert("Enter your name")
    } else if (messageData.email === '') {
      alert("Enter your email")
    } else if (messageData.message === '') {
      alert("Please enter a message")
    } else {
      API.saveMessage(messageData).then((res) => console.log(res));
      alert("Thank you! Your message has been saved, and I will be in touch soon.")
    }
  };

  render() {
    return (
      <Container maxWidth='lg' style={{minHeight: '100vh'}}>
        <div>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} sm={9} md={7}>
              <Paper style={{ margin: '20px', opacity: '.8' }}>
                <Typography style={{ textAlign: 'center' }} variant="h4">If you are interested in hiring me for your event, leave me a message.</Typography>
                <Contact saveMessage={this.saveMessage} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default ContactField