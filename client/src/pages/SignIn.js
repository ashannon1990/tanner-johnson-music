import React from 'react';
import AdminSignIn from '../components/SignIn/index'
import Container from '@material-ui/core/Container';

export default function SignIn() {
    return (
        <Container maxWidth='lg'>
            <div>
                <AdminSignIn />

            </div>
        </Container>
    );
}
