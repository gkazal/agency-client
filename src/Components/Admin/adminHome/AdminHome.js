import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Services from './Services';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../App';


const AdminHome = () => {

    const { loggedInUser } = useContext(UserContext)


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
                        <Services></Services>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default AdminHome;