import React from "react";
import simage1 from "../assets/dumbell.png";
import simage2 from "../assets/arm.png";
import simage3 from "../assets/training.png";
import simage4 from "../assets/game.png";
import simage5 from "../assets/dance.png";
import simage6 from "../assets/yoga.png";
import simage7 from "../assets/consult.png";

function Services() {
    return(
        <div id="services">
            <div className="container">
                <h1 className="u-margin-bottom-medium">our <span>programs</span></h1>

                <div className="a-container">
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage1} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>physical fitness</h2>
                            <p> Unlocking your body's potential and boosting your mood, energy, and overall well-being.</p>
                        </div>
                    </div>
                    <div className="a-box activator">
                        <div className="a-b-img-added">
                            <img src={simage2} alt=""/>
                        </div>
                        <div className="a-b-text">
                            <h2>body building</h2>
                            <p>build your dream physique to be able to unleash your inner strength  and get seious about muscle gain</p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage3} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>wellness training</h2>
                            <p>go beyond the workout. our wellness training programs empower you to live a healthier, happier life and unlock your full potential </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage4} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>gaming centre</h2>
                            <p>test your reflexes in our on-site gaming center. the perfect way to balance your workout routine.</p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage5} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>dance</h2>
                            <p>Want to get fit and have fun? don't miss out on our dance fitness classes! "Move your body, feel the rhythm." </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage6} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>yoga</h2>
                            <p>stretch, strengthen, find your center, and find your flow. "Yoga is not about pose, it's about the journey within" </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage7} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>Consultancy</h2>
                            <p>not sure where to start? our fitness consultants can create a personalized plan to reach your goals. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;