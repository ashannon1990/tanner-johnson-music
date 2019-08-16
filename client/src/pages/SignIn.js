import React from 'react';
import AdminSignIn from '../components/SignIn'
import AdminSignUp from '../components/SignUp'
import Container from '@material-ui/core/Container';

export default function SignIn() {
    return (
        <Container maxWidth='lg' style={{minHeight: '100vh'}}>
            <div>
                <AdminSignIn />
                <AdminSignUp />

            </div>
        </Container>
    );
}
