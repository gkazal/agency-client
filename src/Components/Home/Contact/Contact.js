import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="col-md-10 offset-md-1" style={{paddingBottom:'80px',marginTop:'40px'}}>
            <div className="text-center pt-3 mb-2 pb-5">
                <h1>Contact Us
                </h1>
            </div>
            <div className="row " >
                <div className="col-md-6 col-sm-12 col-xs-12" >
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
                1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!
                1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!
                2sDhaka!5e0!3m2!1sen!2sbd!4v1629897327495!5m2!1sen!2sbd" allowfullscreen="" loading="lazy">

                    </iframe>
                </div>

                <div className="form col-md-6 col-sm-12 col-xs-12">
                    <form>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email Address" />
                        </div>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Name/Company Name" />
                        </div>
                        <div>
                            <form>
                                <textarea placeholder="Your Message.."></textarea>
                            </form>
                        </div>
                        <div>
                            <button  style={{ width: '150px' }} className="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;