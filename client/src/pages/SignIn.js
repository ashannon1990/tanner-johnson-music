import React, { Component } from 'react';
import AdminSignIn from '../components/SignIn'
import AdminSignUp from '../components/SignUp'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import API from '../utils/API'

class SignIn extends Component {


  render() {
    return (
      <div>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={9} md={7}>
            <Paper style={{ margin: '20px', opacity: '.8' }}>
              <Container maxWidth='lg' style={{ minHeight: '100vh' }}>
                <AdminSignIn />
                <AdminSignUp />
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignIn;