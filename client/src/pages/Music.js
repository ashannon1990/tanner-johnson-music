import React from 'react'
import Grid from '@material-ui/core/Grid'
import Video from '../components/Video/Video'
import SoundCloud from '../components/SoundCloud/index'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';

export default function Music() {
    return (
      <Container maxWidth='lg'>
      <div>
          <Typography style={{textAlign: 'center'}} variant="h3">Listen to some of my music</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                 <Video />
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                 <Video />
            </Grid>
          </Grid>
          <br />
          <Typography style={{textAlign: 'center'}} variant="h3">Listen to some of my music below</Typography>
          <SoundCloud />

      </div>
      </Container>
    );
  }
