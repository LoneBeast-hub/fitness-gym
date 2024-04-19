import React from "react";
import image from "../assets/testimonial.png";

function Testimonial () {
    return (
        <div id="testimonial">
            <div className="container">
                <h1 className="testimonial--heading u-margin-bottom-normal"> what    <span>people say </span></h1>

                <div className="testimonial-container">
                    <div className="testimonial-box">
                        <div className="profile">
                            <img src={image} alt="" />

                            <div className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="reviews-detail">
                           <p>Lorem ipsum, vil idread eo av  o aoivbibajl vio oaibvaonvioe oibavhpv;n aopv povvakv viokajvbbv oivavjvibv ia</p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                         <div className="profile">
                            <img src={image} alt="" />

                            <div className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="reviews-detail">
                           <p>Lorem ipsum, vil idread eo av  o aoivbibajl vio oaibvaonvioe oibavhpv;n aopv povvakv viokajvbbv oivavjvibv ia</p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                    <div className="profile">
                            <img src={image} alt="" />

                            <div className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="reviews-detail">
                           <p>Lorem ipsum, vil idread eo av  o aoivbibajl vio oaibvaonvioe oibavhpv;n aopv povvakv viokajvbbv oivavjvibv ia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;