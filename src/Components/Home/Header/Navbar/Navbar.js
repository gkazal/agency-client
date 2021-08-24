import React from 'react';
import logo from '../../../../image/service/navlogo.jpeg'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Nav, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const history = useHistory();

    const [isAdmin, setIsAdmin] = useState(false)
    // check isAdmin or not...
    useEffect(() => {
        fetch('http://localhost:8088/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)
            })

    }, [])


    const dashboard = () => {
        history.push('/parentDashboard')
    }


    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1 " >
                <img style={{ width: '130px' }} src={logo} alt="" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link mr-3" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="#">Our Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="#">Contact Us</Link>
                        </li>
                        {
                            loggedInUser.name ?
                                <div>
                                    <Nav>
                                        <NavDropdown title={loggedInUser.name}>
                                            <NavDropdown.Item onClick={dashboard} >Dashboard</NavDropdown.Item>

                                            <NavDropdown.Item onClick={() => setLoggedInUser({})}>Logout</NavDropdown.Item>

                                        </NavDropdown>
                                    </Nav>
                                </div> :
                                <div>
                                    <Link class="nav-link font-weight-bold" to="/login">Login<span class="sr-only">(current)</span></Link>
                                </div>
                        }

                    </ul>

                </div>


            </nav>


        </div>
    );
};

export default Navbar;