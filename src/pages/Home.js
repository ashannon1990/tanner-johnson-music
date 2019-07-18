import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron/index'
import BioCard from '../components/Card/index'
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

class Home extends Component {
    render () {
        return (
        <div>
            <Jumbotron>
                <Grid container spacing={3}
                alignItems="center"
                justify="center">
                 <Grid item xs={12} sm={8} md={6} lg={3}>
                    <BioCard>
                    
                    </BioCard>
                     </Grid>
                 </Grid>
            </Jumbotron>
        </div>
        )
    }
}

export default Home