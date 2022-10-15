import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=""/>
            </div>
            <div className='about-text'>
                <h1>LEARN ABOUT US</h1>
                <p>Our club is designed to offer you the most innovative and fresh fitness solutions. Featuring the latest and most effective fitness trends, the best fitness equipment and the most progressive programs.<br />All of this and a team of world-class trainers to support and motivate you on your fitness journey with us.  </p>
            </div>
            
            
        </div>
    )
}

export default About
