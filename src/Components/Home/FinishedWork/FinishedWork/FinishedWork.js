import React from 'react';
import work1 from '../../../../image/works/03f02519a175caa5844e190d1db588e0.jpeg'

const FinishedWork = () => {
    return (
        <div style={{ backgroundColor: '#F5FFFA', marginTop: '80px' }} className="d-flex justify-content-center pt-5">
            <div >
                <div >
                    <h1>Some of our finest work</h1>
                </div>
                <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={work1} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">title</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default FinishedWork;