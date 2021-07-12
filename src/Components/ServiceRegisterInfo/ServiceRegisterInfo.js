import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceRegisterList from './ServiceRegisterList';

const ServiceRegisterInfo = () => {
    const {loggedInUser} = useContext(UserContext)
    const [serviceRegisterInfo, setServiceRegisterInfo] = useState([])

    useEffect(() =>{
        fetch('http://localhost:8088/serviceRegister?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setServiceRegisterInfo(data))
        console.log(serviceRegisterInfo)
    }, [])

    return (
        <div>
            {/* <h3>You have {serviceRegisterInfo.length} service</h3> */}
            {
                serviceRegisterInfo.map((reg => <ServiceRegisterList register={reg}></ServiceRegisterList>))
            }
        </div>
    );
};

export default ServiceRegisterInfo;