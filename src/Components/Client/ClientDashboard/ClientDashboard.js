import React from 'react';
import ServiceRegisterInfo from '../../ServiceRegisterInfo/ServiceRegisterInfo';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const ClientDashboard = () => {



    return (
        <div className="" style={{ backgroundColor: '#F0F8FF', height: '100vh', overflowX:'hidden'}}>
            <div className="row">
                <div className="col-md-12">
                    <ClientNavbar></ClientNavbar>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <ClientSidebar></ClientSidebar>
                </div>
                <div className="col-md-9">
                    <ServiceRegisterInfo></ServiceRegisterInfo>
                </div>


            </div>

        </div>
    );
};

export default ClientDashboard;