import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceRegisterList from './ServiceRegisterList';

const ServiceRegisterInfo = () => {
    const { loggedInUser } = useContext(UserContext)
    const [serviceRegisterInfo, setServiceRegisterInfo] = useState([])

    useEffect(() => {
        fetch('https://ancient-bastion-82733.herokuapp.com/serviceRegister?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setServiceRegisterInfo(data))
    }, [])

    return (
        <div className="  " style={{ marginTop: '20px', margin: '10px' }}>
            <h3>You have {serviceRegisterInfo.length} service</h3>
            {
                serviceRegisterInfo.map((reg => <ServiceRegisterList register={reg}></ServiceRegisterList>))
            }

            {/* <div className="row d-flex justify-content-center">
                {
                    serviceRegisterInfo.map((reg => <ServiceRegisterList register={reg}></ServiceRegisterList>))
                }
            </div> */}

        </div>
    );
};

export default ServiceRegisterInfo;