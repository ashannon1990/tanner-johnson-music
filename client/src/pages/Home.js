import React, { Component } from "react";
import BioCard from '../components/Card/index'
import BioCard2 from '../components/Card/BioCard2'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SimpleSlider from '../components/Carousel/index'
import Paper from '@material-ui/core/Paper'
import './style.css'
import Zoom from 'react-reveal/Zoom'

class Home extends Component {
  render() {
    return (
      <div>
        <SimpleSlider />
        <br /><br />
        <Container maxWidth='lg' style={{ minHeight: '90vh' }}>
          <div>
            <Paper style={{ background: 'rgba(255, 255, 255, 0.4)', marginBottom: 30 }}>
              <Grid container spacing={4}
                alignItems="center"
                justify="center">
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Zoom>
                    <BioCard />
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Zoom delay={1000}>
                    <BioCard2 />
                  </Zoom>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Container>
      </div>
    )
  }
}

export default Home