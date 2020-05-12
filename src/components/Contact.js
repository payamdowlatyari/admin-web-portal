import React, { Component } from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';


class Contact extends Component {

    render() {
        return (
            <Container style={{
                marginTop: '50px'
            }}>
                <br></br>
                <h1>Contact Us</h1>
                <hr></hr>
                <div className="contact-form">


                    <div>
                        <form action="#">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email address.." />


                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="social-link" style={{ position: 'elative', bottom: '10px' }}>
                    <button class="fa fa-envelope"></button>
                    <button class="fa fa-phone"></button>
                    <button class="fa fa-twitter"></button>
                    <button class="fa fa-facebook"></button>
                    <button class="fa fa-linkedin"></button>
                    <button class="fa fa-github"></button>
                    <button class="fa fa-google"></button>
                    <button class="fa fa-youtube"></button>



                    <p style={{ top: '20px', button: '0px', position: 'relative' }}>
                        CalPlug &copy; {new Date().getFullYear()} | All Rights Reserved
                            </p>
                </div>
            </Container>

        );
    }
}

export default Contact; 