import React from 'react';
import './Footer.css'
import logo from '../../image/navlogo.jpeg'


const Footer = () => {

    return (

        <section style={{ backgroundColor: '#81D8D0'}}>
            <div>
                <div className=" pt-5 pb-5">
                    <h2 className="text-center ">Follow us for further information</h2>

                    <div class=" d-flex search-box mt-4" >
                        <input class="search-txt" type="text" placeholder="Enter Your Email" />
                        <button className="search-btn headerButton" style={{ font_weight: 'bold' }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className=" row mt-5" >
                    <div className="col-md-3">
                        <img src={logo} style={{ width: '100px' }} alt="" />
                        <p>Agency that helps you</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Services</h5>
                        <p>Design</p>
                        <p>Marketing</p>
                        <p>Development</p>
                        <p>Software development</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Useful links</h5>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Our mission</p>
                        <p>Our events</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Contact</h5>
                        <p>creative agency is dedicated for helping you.</p>
                        <p>Dhaka, Bangladesh</p>

                    </div>

                </div>

            </div>

            <footer class="footer text-center mt-5 pb-3">
                <small> ©2021. Agency Service. All rights reserved. Dhaka, Bangladesh</small>
            </footer>



        </section>
    );
};

export default Footer;