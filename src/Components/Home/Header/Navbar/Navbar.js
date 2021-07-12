import React from 'react';
import logo from '../../../../image/service/navlogo.jpeg'

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1">
            <img style={{width: '170px'}} src={logo} alt=""/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-3" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3" href="/login">Login</a>
                    </li>
                    <li class="nav-item  mr-3">
                        <a class="nav-link font-weight-bold" href="/admin">Admin<span class="sr-only">(current)</span></a>
                    </li>



                </ul>

            </div>
        </nav>


    );
};

export default Navbar;