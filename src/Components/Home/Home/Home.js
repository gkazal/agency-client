import React from 'react';
import FinishedWork from '../FinishedWork/FinishedWork/FinishedWork';
import Header from '../Header/Header/Header';
import WorkType from '../WorkType/WorkType/WorkType';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WorkType></WorkType>
            <FinishedWork></FinishedWork>
            
        </div>
    );
};

export default Home;