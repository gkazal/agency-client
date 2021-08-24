import React, { useContext } from 'react';
import './ServiceList.css';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServiceList = (props) => {
    const { name, imageUrl } = props.services
    console.log(name)

    const { setImage } = useContext(UserContext)

    const history = useHistory()

    const handleService = (name) => {
        history.push(`/register/${name}`)
        setImage(imageUrl)
    }
    const cardStyle = {
        img: {
            width: '100%',
            height: '200px',
            align: 'center'
        },
        center: {
            justifyContent: "center", display: 'flex'
        },
        buttonStyle: {
            margin: '10px', padding: '10px', textAlign: 'center', border: 'none', width: '150px',
            borderRadius: "40px",
            backgroundColor: '#FFDB58'
        }
    }

    return (
        // <div className="col-xl-12 col-lg-12 col-md-12  m-2" >
            <div>
                <div style={{ backgroundColor: '#F0801F', margin: '10px' }}>
                    <img style={cardStyle.img} class="card-img-top" src={imageUrl} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Order</button>
                    </div>
                </div>
            </div>

        // </div>
    );
};

export default ServiceList;