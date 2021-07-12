import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const Services = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        console.log(data)
        const evenData = {
            name: data.Name,
            imageUrl: imageUrl
        }
        const url = `http://localhost:8088/addServices`
        console.log(evenData)

        fetch(url, {
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(evenData)
        })
        .then( res => console.log('server side response', res))
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
            })

    }

    return (
        <div className="d-flex justify-content-center">
             <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="test" {...register("Name")}  />
                <br/>
                <input name="example" type="file" onChange={handleImage} />
                <br/>
                <input type="submit" />
            </form>

        </div >
    );
};

export default Services;