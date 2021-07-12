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
        <section>
            <div style={{backgroundColor:'#F0F8FF'}}>
                <div className="text-center pt-3 mb-2 pb-2">
                    <h4 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 'bold', fontSize: '60px' }}>What People <span style={{ color: 'green' }}>
                    Think About Us</span></h4>
                </div>
                <div className="row d-flex justify-content-center  ">
                    {
                        data.map(feedback => <FeedbackPost feedback={feedback} key={feedback.id}></FeedbackPost>)
                    }

                </div>

            </div>

        </section>
    );
};

export default ShowFeedback;