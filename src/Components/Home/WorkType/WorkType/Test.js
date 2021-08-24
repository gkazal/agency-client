import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../../image/design.png'
import image2 from '../../../../image/development.png'
import image3 from '../../../../image/online-marketing.jpg'

const Test = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    const cardStyle = {
       
    }
    return (

        <div>
            <h2>Pause On Hover</h2>
            <Slider {...settings}>
                <div>
                    <div >
                        <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
                        <div class="card-body" >
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div >
                        <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
                        <div class="card-body" >
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div >
                        <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
                        <div class="card-body" >
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div >
                        <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
                        <div class="card-body" >
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>


        // <div>
        //     <h2> Multiple items </h2>
        //     <div>
        //         <Slider {...settings} >
        //             <div style={{backgroundColor:'blue'}}>
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body"  style={{backgroundColor:'blue'}}>
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>
        //             <div style={{ backgroundColor: 'green'}}> 
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body">
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>
        //             <div style={{ backgroundColor: 'green'}}>
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body">
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>
        //             <div style={{ backgroundColor: 'green'}}>
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body">
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>
        //             <div style={{ backgroundColor: 'green'}}>
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body">
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>
        //             <div style={{ backgroundColor: 'green'}}> 
        //                 <img style={cardStyle.img} class="card-img-top" src={image1} alt="Card image cap" />
        //                 <div class="card-body">
        //                     <h5 class="card-title">Title</h5>
        //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     {/* <button style={cardStyle.buttonStyle} onClick={() => handleService(name)} class="btn headerButton" >Details</button> */}
        //                 </div>
        //             </div>

        //         </Slider>
        //     </div>
        // </div>
    );
};

export default Test;