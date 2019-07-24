import React from 'react';
import Contact from '../components/Contact/index'
import Grid from '@material-ui/core/Grid'
import Modal from '../components/Modal/index'
import Container from '@material-ui/core/Container';

export default function ContactFoeld() {
  return (
    <Container maxWidth='lg'>
    <div>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={9} md={6}>
        <Contact />
      </Grid>
    </Grid>
    <Modal/>
    </div>
    </Container>
  );
}