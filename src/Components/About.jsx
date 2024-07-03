import React from "react";
import image from "../assets/about.png";

function About() {
    return(
        <div id="about">
            <div className="container">
                <div className="about-container">
                    <div className="about-image">
                        <img src={image} alt="our fitness videos" />
                    </div>
                    
                    <div className="about-text">
                        <h1><span>about</span> us</h1>
                        <p className="u-margin-bottom-small">At Goodness gym and fitness center, We understand that reaching your fitness goals requires more than just equipment and motivation. That's why we've assembled a team of highly qualified and passionate certified trainers who are dedicated to helping you achieve your unique fitness aspirations. </p>

                        <p className="u-margin-bottom-medium">Our Passionate and certified trainers create personalized programs to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete. Let our experts guide you on your fitness journey!</p>

                        <a href="#pricing" className="about-btn">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;