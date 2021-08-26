import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './Service.css'

const Services = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        console.log(data)
        const evenData = {
            name: data.Name,
            imageUrl: imageUrl
        }
        const url = `https://ancient-bastion-82733.herokuapp.com/addServices`
        console.log(evenData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(evenData)
        })
            .then(res => console.log('server side response', res))
            alert('Inserted Successfully')

    }


    const handleImage = (event) => {
        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', '0793feeaa770948dd7157bdf72c5c908')
        imageData.append('image', event.target.files[0])

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
        })
            .then(response => response.json())
            .then(data => {
                // setImageUrl(data.data.display_url)
                setImageUrl(data.data.display_url)
                // console.log(data)

            })
            .catch(error => {
                console.error(error)
                alert(error)
            })

    }

    return (

        <div className="order-container">
            <div className="service-bg" style={{ marginTop: '150px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label style={{ color: 'green', fontSize: '30px', fontWeight: 'bold' }} for="validationTooltip01">Title Name</label><br />
                    <input name="name" defaultValue="" {...register("Name")} required />
                    <br />
                    <label style={{ color: 'green', fontSize: '30px', fontWeight: 'bold' }} for="validationTooltip01">Choose File</label> <br />
                    <input name="example" type="file" onChange={handleImage} required />
                    <br />
                    <input style={{ cursor: 'pointer' }} className="submit-btn" type="submit"/>
                </form>

            </div >
        </div>

    );
};

export default Services;