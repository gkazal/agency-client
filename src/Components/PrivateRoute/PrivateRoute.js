import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedInUser} = useContext(UserContext)
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
    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedInUser.email ? (
                children
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
        }
    />
    );
};

export default PrivateRoute;