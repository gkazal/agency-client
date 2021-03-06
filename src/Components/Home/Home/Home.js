import React from 'react';
import ShowFeedback from '../../Feedback/ShowFeedback';
import Footer from '../Footer/Footer';
import FinishedWork from '../FinishedWork/FinishedWork/FinishedWork';
import Header from '../Header/Header/Header';
import WorkType from '../WorkType/WorkType/WorkType';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Header></Header>
            <WorkType></WorkType>
            <FinishedWork></FinishedWork>
            <ShowFeedback></ShowFeedback>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;