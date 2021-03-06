import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../components/Video'
import SoundCloud from '../components/SoundCloud/index'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'

export default function Music() {
    return (
      <Container maxWidth='lg' style={{minHeight: '90vh'}}>
      <div>
          <Paper style={{marginTop: '50px', padding: '5px', background: 'rgba(255, 255, 255, 0.4)'}}>
          {/* <Typography style={{textAlign: 'center'}} variant="h3">Here are some video examples of my work.</Typography> */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                 <Video videoId="QxEEdJ2EOGA"/>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                 <Video videoId="XHLNlXtSlqE" />
            </Grid>
          </Grid>
          <br />
          {/* <Typography style={{textAlign: 'center'}} variant="h4">Listen to some additional recordings I have done.</Typography> */}
          <SoundCloud />
          </Paper>

      </div>
      </Container>
    );
  }
