import React from 'react';
import work1 from '../../../../image/works/03f02519a175caa5844e190d1db588e0.jpeg'
import work2 from '../../../../image/works/74cf22f6b942fb109a0a1c7421178560.png'
import work3 from '../../../../image/works/3_4x.png'
import Tilt from 'react-vanilla-tilt'

const FinishedWork = () => {

    const cardStyle = {
        img: {
            width: '100%',
            height: '200px',
        }
    }


    return (
        <div className="" style={{ backgroundColor: '#F5FFFA', paddingTop: '40px' }} >

            <h1 className="text-center pt-5 pb-5">Some of our finest work</h1>

            <div className=" col-md-10 offset-md-1  pb-5 ">
                {/* <Tilt>
                    <div class="" style={{ border: 'none' }}>
                        <img class="card-img-top" src={work1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Creative Business</h5>
                            <a href="#" class="btn headerButton">Details</a>
                        </div>
                    </div>
                </Tilt> */}
                <div className=" row  d-flex justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div style={{  borderRadius: '20px', padding: '10px', boxShadow: '0px 10px 40px rgb(0 0 0 / 10%' }}>
                            <img style={cardStyle.img} class="card-img-top" src={work3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div style={{  borderRadius: '20px', padding: '10px', boxShadow: '0px 10px 40px rgb(0 0 0 / 10%' }}>
                            <img style={cardStyle.img} class="card-img-top" src={work1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div style={{ borderRadius: '20px', padding: '10px', boxShadow: '0px 10px 40px rgb(0 0 0 / 10%' }}>
                            <img style={cardStyle.img} class="card-img-top" src={work2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>






            </div>
        </div>
    );
};

export default FinishedWork;