import React, {useState} from 'react';
import './Main.css';
import Roll from 'react-reveal/Roll';

//import images
import bg from './Images/bg.jpg';
import moon from './Images/moon.png';
import mountain from './Images/mountain.png';
import road from './Images/road.png';

function Main() {
    const [offset, setOffset] = useState()

    const handleScroll = () => setOffset(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)

        return(
            <div className='main' id='home'>
                <div className="section">
                    <img src={bg} alt='bg'
                        style={{top: (offset * 0.5 + 'px' )}}
                    />
                    <img src={moon} alt='moon'
                        style={{left: (-offset * 0.5 + 'px')}}
                    />
                    <img src={mountain} alt='mountain'
                        style={{top: (-offset * 0.15 + 'px')}}
                    />
                    <img src={road} className='road' alt='road'
                        style={{top: (offset * 0.15 + 'px')}}
                    />
                    <div className='content'
                        style={{top: (offset * 1 + 'px')}}>
                        <h2 className='header'>I am <span>Balint Pipei</span></h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div className='menu'>
                    <div className='nav'>
                        <ul>
                            <Roll left>
                                <li><a href='#home' className='nav-link' >Home</a></li>
                            </Roll>
                            <Roll right>
                                <li><a href='#project' className='nav-link'>Projects</a></li>
                            </Roll>
                            <Roll left>
                                <li><a href='#about' className='nav-link'>About Me</a></li>
                            </Roll>
                            <Roll right>
                                <li><a href='#contact' className='nav-link'>Contact Me</a></li>
                            </Roll>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default Main;