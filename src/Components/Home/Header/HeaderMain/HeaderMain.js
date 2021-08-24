import React from 'react';
import bgImage from '../../../../image/service/headerBackground.jpg'
import './HeaderMain.css';
import { useHistory } from 'react-router';

const HeaderMain = () => {
    const buttonStyle = {
        margin: '10px', padding: '20px', textAlign: 'center', border: 'none', width: '150px',
        borderRadius: "40px",
        backgroundColor: '#FFDB58'
    }
    const history = useHistory()
    const login = () =>{
        history.push('/login')
    }

    return (
        <main className="row d-flex align-items-center justify-content-center offset-md-1 mt-2">
            <div className="headerText col-md-6">
                <h1 >Lets Grow <br/> Up Your Application</h1>
                <button style={buttonStyle} onClick={login} class="headerButton btn">JOIN US</button>

            </div>
            <div className="headerImage col-md-6">
                <img style={{ width: '100%', height: '100%' }} src={bgImage} alt="" />

            </div>
        </main>
    );
};

export default HeaderMain;