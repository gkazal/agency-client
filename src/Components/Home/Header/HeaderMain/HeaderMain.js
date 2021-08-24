import React from 'react';
import bgImage from '../../../../image/service/headerBackground.jpg'
import './HeaderMain.css';
import { useHistory } from 'react-router';

const HeaderMain = () => {
  
    const history = useHistory()
    const login = () => {
        history.push('/login')
    }

    return (
        <main className="row d-flex align-items-center offset-md-1 mt-2" >
            <div className="headerText col-md-5">
                <h1 className="text-bolt">Lets Grow Your  <br /> Brand To The <br /> Next Level</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Itaque reiciendis rem, nisi ratione quisquam inventore.</p>
                
                <button onClick={login} class="headerButton btn">JOIN US</button>

            </div>
            <div className="headerImage col-md-6">
                <img style={{ width: '100%', height: '100%' }} src={bgImage} alt="" />

            </div>
        </main>
    );
};

export default HeaderMain;