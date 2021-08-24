import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import DashboardHome from '../Dashboard/DashboardHome';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Header/Navbar/Navbar';


const Dashboard = () => {

    const { loggedInUser } = useContext(UserContext)

    const [isAdmin, setIsAdmin] = useState(false)

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
        <div className="" style={{ backgroundColor: '#F0F8FF', height: '100vh', overflowX: 'hidden' }}>
            <div className=" ">
                <div className="row">
                    <div className="col-md-12">
                        <AdminNavbar></AdminNavbar>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-md-9">
                        <DashboardHome></DashboardHome>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;