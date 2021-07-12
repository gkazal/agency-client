import React from 'react';
import ShowFeedback from '../../Feedback/ShowFeedback';
import FinishedWork from '../FinishedWork/FinishedWork/FinishedWork';
import Header from '../Header/Header/Header';
import WorkType from '../WorkType/WorkType/WorkType';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WorkType></WorkType>
            <FinishedWork></FinishedWork>
            <ShowFeedback></ShowFeedback>
            
        </div>
    );
};

export default Home;