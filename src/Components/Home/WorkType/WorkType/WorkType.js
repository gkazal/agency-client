import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceList from './ServiceList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import './WorkType.css';

const WorkType = () => {
    const [services, setServices] = useState([])

    // show services list from DB
    useEffect(() => {
        fetch('http://localhost:8088/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const cardStyle = {
        justifyContent: "center",
        display: 'flex'

    }

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            <div className=" " style={{ backgroundColor: '#F0F8FF', marginTop: '80px',paddingTop: '80px',marginBottom: '40px',paddingBottom:'90px'}} >
                <div className=" ">
                    <div>
                        <h6 className="text-danger" style={cardStyle}> What We Do?</h6>
                        <h1 style={cardStyle}>Services We Can Help You With</h1>
                    </div>
                    <div style={{margin:'50px'}} >
                        <Slider {...settings}>
                            {
                                services.map(services => <ServiceList services={services}></ServiceList>)
                            }

                        </Slider>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkType;