import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Button, Card, Col, Container, Input, FormGroup, Row, Form } from 'react-bootstrap';
import './Login.css';
import bgImage from '../../../image/headerBackground.jpg';
import google from '../../../image/works/google.png'
import Navbar from '../../Home/Header/Navbar/Navbar';


const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)


    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email: email, image: photoURL }
                setLoggedInUser(signedInUser)
                console.log(signedInUser)

                history.replace(from)

                // when login then directly go to parent dashboard.
                history.push('/parentDashboard')
                
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

            });
          
    }

    return (

        <div className=" ">
            <Navbar></Navbar>
            <Row className="justify-content-md-center" style={{ marginTop: '80px' }}>
                <Col md={6} sm={12} >
                    <img style={{ width: '100%', height: '100%' }} src={bgImage} alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <Form className="form" style={{backgroundColor: '#81D8D0'}}>
                        <Row style={{ fontSize: '25px', fontWeight: 'bold', justifyContent: 'center', marginBottom: '30px' }}>Login Form</Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button style={{ marginLeft: '5px' }} variant="warning" size="md" block>
                            Or
                        </Button>
                        <Button className="googleButton" onClick={handleGoogleSignIn}>
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <img style={{ width: '20px' }} src={google} alt="" />
                                </div>
                                <div className="col-md-6 col-6 google">
                                    Sign In With Google
                                </div>
                            </div>
                        </Button>
                    </Form>

                </Col>
            </Row>
        </div>


    );
};

export default Login;