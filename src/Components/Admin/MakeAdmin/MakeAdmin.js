import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const { loggedInUser } = useContext(UserContext)
    const [admin, setAdmin] = useState('')

    const handleAdmin = () => {
        const newAdmin = {}
        newAdmin.email = admin

        fetch('http://localhost:8088/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

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
                    <div className="col-md-9  mt-5 "  >
                        <div className=" justify-content-center" >

                            <h4 style={{ margin: '20px', fontWeight: 'bold' }}> Make Your Admin</h4>
                            <div className="col-md-12">

                                <div style={{ backgroundColor: '#81D8D0', height: '300px', borderRadius: '10px',padding:'20px' }}>
                                    <form className="form-inline ">
                                        <label for="validationTooltip01">Email</label>
                                    </form>
                                    <form class="form-inline">
                                        <div class="form-group mb-2 ">
                                            <label for="staticEmail2" class="sr-only">Email</label>
                                            <input type="email" class="form-control" id="email" size="40" placeholder="Set Email" 
                                                onChange={(e) => setAdmin(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button onClick={() => handleAdmin()} type="submit" class="btn btn-success mb-2 ml-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>

    );
};

export default MakeAdmin;