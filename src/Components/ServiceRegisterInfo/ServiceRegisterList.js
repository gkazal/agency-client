import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const ServiceRegisterList = (props) => {
    const { name, email, service, image, checkIn } = props.register

    const cardStyle = {
        // width: '18rem',
        height: 'auto',
        display: 'inline-block',
        margin: '10px',
    }
    return (

        <div class="card col-xl-3 col-lg-4 col-md-5 col-sm-4 col-9" style={cardStyle}>
            <img class="card-img-top" src={image} style={{ width: '100%' }} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{service}</h5>
                <Typography variant="body2" gutterBottom>
                    {(new Date(checkIn).toString('dd/MM/yyyy'))}
                </Typography>
            </div>

        </div>
    );
};

export default ServiceRegisterList;