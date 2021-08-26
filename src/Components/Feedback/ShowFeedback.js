import React, { useEffect, useState } from 'react';
import FeedbackPost from './FeedbackPost';

const ShowFeedback = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://ancient-bastion-82733.herokuapp.com/showFeedback')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <section style={{ backgroundColor: '#F0F8FF' }}>
            <div className="col-md-10 offset-md-1 " style={{paddingBottom:'80px',paddingTop:'40px'}}>
                <div className="text-center pt-3 mb-2 pb-5">
                    <h1>What People <span style={{ color: 'orange' }}>
                        Think About Us</span>
                    </h1>
                </div>
                <div className="row d-flex justify-content-center " >
                    {
                        data.map(feedback => <FeedbackPost feedback={feedback} key={feedback.id}></FeedbackPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShowFeedback;