import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useParams, useHistory } from 'react-router';
import bgImage from '../../../image/service/headerBackground.jpg';


const RegisterForm = () => {

    const { service } = useParams()
    console.log(service)

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const { email } = loggedInUser

    const [serviceName] = useState({ service })

    const { image } = useContext(UserContext)
    const [serviceImage] = useState({ image })


    const [selectedDate, setSelectedDate] = React.useState({
        checkIn: new Date(),
    });
    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.checkIn = date
        setSelectedDate(newDate);
    };


    const history = useHistory()
    const handleRegister = () => {
        history.push(`/clientDashboard`)

        const newBookings = { ...loggedInUser, ...selectedDate, ...serviceName, ...serviceImage }

        fetch('https://ancient-bastion-82733.herokuapp.com/addRegisterService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (

        <div className=" ">
            <Row className="justify-content-md-center" style={{ marginTop: '80px' }}>
                <Col md={6} sm={12} >
                    <img style={{ width: '100%', height: '100%' }} src={bgImage} alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <Form className="form" >

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Name</Form.Label>
                            <Form.Control type="text" value={loggedInUser.name} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Email</Form.Label>
                            <Form.Control type="text" value={loggedInUser.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label type="text">Events</Form.Label>
                            <Form.Control type="text" value={service} />
                        </Form.Group>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="checkInDate"
                                    value={selectedDate.checkIn}
                                    onChange={handleCheckInDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </Grid>
                        </MuiPickersUtilsProvider>

                        <Button onClick={() => handleRegister(email)} style={{ marginLeft: '5px' }} variant="warning" size="md" block>
                            Register
                        </Button>
                    </Form>



                </Col>
            </Row>
        </div>
    );
};

export default RegisterForm;