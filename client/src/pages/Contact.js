import React, { Component } from 'react';
import Contact from '../components/Contact/index'
import { Grid, Container, Paper, Typography } from '@material-ui/core'
import API from '../utils/API'

class ContactField extends Component {

  saveMessage = (event, messageData) => {
    event.preventDefault();
    if (messageData.name === '' || messageData.email === '' || messageData.message === '') {
      alert("Enter all required fields")
    } else {
      API.saveMessage(messageData).then((res) => console.log(res));
      alert("Thank you! Your message has been saved, and I will be in touch soon.")
    }
  };

  render() {
    return (
      <Container maxWidth='lg' style={{minHeight: '90vh'}}>
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