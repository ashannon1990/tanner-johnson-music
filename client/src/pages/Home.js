import React, { Component } from "react";
// import Jumbotron from '../components/Jumbotron/index'
import BioCard from '../components/Card/index'
import Grid from '@material-ui/core/Grid';
import './style.css'
import Container from '@material-ui/core/Container';
import SimpleSlider from '../components/Carousel/index'

class Home extends Component {
    render () {
        return (
            <div>
        <Container maxWidth='lg'>    
        <SimpleSlider />
        <div>
                <Container>               
                <Grid container spacing={3}
                alignItems="center"
                justify="center">
                    
                 <Grid item xs={12} sm={8} md={6} lg={3}>
                     <div id="myID">
                    <BioCard />
                    </div>
                     </Grid>
                 </Grid>
                 </Container>
        </div>
        </Container>
        </div>
        )
    }
}

export default Home