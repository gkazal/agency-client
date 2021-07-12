import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceList from './ServiceList';

const WorkType = () => {
    const [services, setServices] = useState([])

    // show services list from DB
    useEffect(() => {
        fetch('http://localhost:8088/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const cardStyle = {
        display: 'flex'

    }


    return (
        <div style={{ backgroundColor: '#F0F8FF', marginTop: '80px' }} className="d-flex justify-content-center pt-5">
            <div >
                <div >
                    <h6 style={{ marginLeft: '50%' }}> What We Do?</h6>
                    <h1>Services We Can Help You With</h1>
                </div>
                <div style={{display:'flex',margin:'10px',padding:'10px'}}>
                    {
                        services.map(services => <ServiceList services={services}></ServiceList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkType;