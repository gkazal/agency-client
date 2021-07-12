import React from 'react';

const ServiceRegisterList = (props) => {
    const { name, email, service, image, _id } = props.register

    const cardStyle = {
        width: '18rem',
        maxWidth: 345,
        display: 'inline-block',
        margin: '10px',
        padding: '20px',
        marginLeft: '30px',
        backgroundColor: '#F5FFFA'
    }
    return (
        <div style={cardStyle}>
            <img style={{ width: '200px' }} src={image} alt="" />
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{service}</h3>
            <button variant="danger">Delete</button>

        </div>
    );
};

export default ServiceRegisterList;