import React, { useEffect, useState } from 'react';
import FeedbackPost from './FeedbackPost';

const ShowFeedback = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8088/showFeedback')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <section style={{ backgroundColor: '#F0F8FF' }}>
            <div className="text-center pt-3 mb-2 pb-5">
                <h4 style={{ marginTop: '50px', fontWeight: 'bold', fontSize: '60px' }}>What People <span style={{ color: 'orange' }}>
                    Think About Us</span></h4>
            </div>
            <div className="row d-flex justify-content-center col-xl-12 col-lg-12 col-md-12 col-12" style={{paddingBottom: '100px'}}> 
                {
                    data.map(feedback => <FeedbackPost feedback={feedback} key={feedback.id}></FeedbackPost>)
                }

            </div>


        </section>
    );
};

export default ShowFeedback;