import React from 'react';
import './Contact.css';
import Fade from 'react-reveal/Fade';

//import images

import facebookico from './Images/facebookico.png';
import gmailicon from './Images/Gmailicon.png';
import githubicon from './Images/Githubicon.png';
import linkedinicon from './Images/linkedinicon.png';

class Contact extends React.Component {
    render() {
        return(
            <div className='contact' id='contact'>
                <Fade top>
                <h2 className='contact-header'>Contact Me</h2>
                </Fade>
                <div className='contact-container'>
                    <div className='contact-box'>
                        <div className='text-box'>
                            <h6>Message Me</h6>
                            <input type='text' placeholder='Name' />
                            <input type='text' placeholder='Email' />
                            <textarea placeholder='Message' rows='10' cols='35'/>
                            <button type='submit' className='submit'>Send Message</button>
                        </div>
                        <div className='link-box'>
                            <h6>Hello There!</h6>
                            <p>I am available anytime for a coffee.</p>
                            <div className='link-container'>
                                <div className='link-flex'>
                                    <a href='https://www.facebook.com/balint.pipei' target='_blank'><img src={facebookico} alt='facebookicon' /></a>
                                    <a href='https://www.linkedin.com/feed/' target='_blank'><img src={linkedinicon} alt='linkedin' /></a>
                                    <a href='https://www.gmail.com' target='_blank'><img src={gmailicon} alt='gmail' /></a>
                                    <a href='https://github.com/balintpipei' target='_blank' ><img src={githubicon} alt='github' /></a>
                                </div>
                                <div className='personal-flex'>
                                    <div>
                                        <h6>Name</h6>
                                        <p>Balint Pipei</p>
                                    </div>
                                    <div>
                                        <h6>Location</h6>
                                        <p>Sussex, United Kingdom</p>
                                    </div>
                                    <div>
                                        <h6>Call Me</h6>
                                        <p>+44 7464 019674</p>
                                    </div>
                                    <div>
                                        <h6>Email Me</h6>
                                        <p>balintpipei1120@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;