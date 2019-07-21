import React from 'react';
import Contact from '../components/Contact/index'
import Grid from '@material-ui/core/Grid'
import Modal from '../components/Modal/index'

export default function ContactFoeld() {
  return (
    <div>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={9} md={6} lg={4}>
        <Contact style={{marginLeft: "10px"}}/>
      </Grid>
    </Grid>
    <Modal/>
    </div>
  );
}