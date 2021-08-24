import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTaxi, faUserLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'


const AdminSidebar = () => {

    return (
        <div>
           
            <div class="offcanvas offcanvas-start sidebar-nav" style={{ width: '250px', marginTop: '65px'}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <ul className="sidebarList" style={{ listStyle: 'none' }}>

                        <li className="sidebarListItem ">
                            <Link to="" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faTaxi} /> <span>Home</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/dashboard" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/addService" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/makeAdmin" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faUserLock} /> <span>Make Admin</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>








            {/* <div className={sidebar ? 'side-menu active' : 'side-menu inactive'}>
                <div className="sidebarMenu">
                    <ul className="sidebarList" style={{ listStyle: 'none' }}>
                        
                        <li className="sidebarListItem ">
                            <Link to="" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faTaxi} /> <span>Home</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/dashboard" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/addService" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to="/makeAdmin" className=" sidebarIcon text-dark">
                                <FontAwesomeIcon icon={faUserLock} /> <span>Make Admin</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div > */}

        </div>


    );
};

export default AdminSidebar;