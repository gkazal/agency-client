import React from 'react';
import work1 from '../../../../image/works/03f02519a175caa5844e190d1db588e0.jpeg'
import work2 from '../../../../image/works/74cf22f6b942fb109a0a1c7421178560.png'
import work3 from '../../../../image/works/3_4x.png'
import Tilt from 'react-vanilla-tilt'

const FinishedWork = () => {
    const buttonStyle = {
        margin: '10px', padding: '10px', textAlign: 'center', border: 'none', width: '150px',
        borderRadius: "40px",
        backgroundColor: '#FFDB58'
    }

    return (
        <div style={{ backgroundColor: '#F5FFFA', marginTop: '80px' }} >

            <h1 className="text-center pt-5 pb-5">Some of our finest work</h1>

            <div className="row d-flex justify-content-center mb-3 pb-5 ">
                <Tilt>
                    <div class="" style={{ border: 'none' }}>
                        <img class="card-img-top" src={work1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Creative Business</h5>
                            <a style={buttonStyle} href="#" class="btn headerButton">Details</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div class="" style={{ border: 'none' }}>
                        <img class="card-img-top" src={work2} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Social Business</h5>
                            <a style={buttonStyle} href="#" class="btn headerButton">Details</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div class="" style={{ border: 'none' }}>
                        <img class="card-img-top" src={work3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Social Business</h5>
                            <a style={buttonStyle} href="#" class="btn headerButton">Details</a>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default FinishedWork;