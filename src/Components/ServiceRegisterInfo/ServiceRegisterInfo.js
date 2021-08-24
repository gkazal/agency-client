import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceRegisterList from './ServiceRegisterList';

const ServiceRegisterInfo = () => {
    const { loggedInUser } = useContext(UserContext)
    const [serviceRegisterInfo, setServiceRegisterInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/serviceRegister?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setServiceRegisterInfo(data))
    }, [])

    return (
        <div className="  " style={{ marginTop: '20px', margin: '10px' }}>
            <h3>You have {serviceRegisterInfo.length} service</h3>

            <div className="row justify-content-center">
                {
                    serviceRegisterInfo.map((reg => <ServiceRegisterList register={reg}></ServiceRegisterList>))
                }
            </div>
          
        </div>
    );
};

export default ServiceRegisterInfo;