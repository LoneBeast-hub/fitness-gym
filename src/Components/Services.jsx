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
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box activator">
                        <div className="a-b-img-added">
                            <img src={simage2} alt=""/>
                        </div>
                        <div className="a-b-text">
                            <h2>body building</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage3} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>wellness training</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage4} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>gaming centre</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage5} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>dance</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage6} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>yoga</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                    <div className="a-box">
                        <div className="a-b-img">
                            <img src={simage7} alt="" />
                        </div>
                        <div className="a-b-text">
                            <h2>Consultancy</h2>
                            <p>Build your physical fitness wiht the </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;