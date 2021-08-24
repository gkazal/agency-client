import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Dashboard from '../Admin/Dashboard/Dashboard';
import ClientDashboard from '../Client/ClientDashboard/ClientDashboard';


const ParentDashboard = () => {
    const { loggedInUser } = useContext(UserContext)


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
        // login page click if admin go to admin dashboard else go client dashboard
        <div>
            { isAdmin &&
                <div>
                    <Dashboard></Dashboard>
                </div>
            }
            { !isAdmin &&
                <div>
                    <ClientDashboard></ClientDashboard>
                </div>
            }

        </div>
    );
};

export default ParentDashboard;