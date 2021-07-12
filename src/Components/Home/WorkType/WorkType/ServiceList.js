import React, { useContext } from 'react';
import './ServiceList.css';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';



const ServiceList = (props) => {
    const { name, imageUrl } = props.services
    console.log(name)

    const {setImage} = useContext(UserContext)



    const history = useHistory(name)

    const handleService = (name) => {
        history.push(`/register/${name}`)
        setImage(imageUrl)

    }
    
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => handleService(name)} class="btn btn-primary" >Details</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceList;