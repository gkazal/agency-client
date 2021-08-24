import React from 'react';
import Feedback from '../../Feedback/Feedback';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const ClientFeedback = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <ClientNavbar></ClientNavbar>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <ClientSidebar></ClientSidebar>
                </div>
                <div className="col-md-10">
                    <Feedback></Feedback>
                </div>


            </div>

        </div>
    );
};

export default ClientFeedback;