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

                            <zdiv className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star-half" aria-hidden="true"></i>
                                    </div>
                            </zdiv>
                        </div>
                        <div className="reviews-detail">
                           <p>Built muscle, felt amazing! GGFC's program transformed my body & health. Highly recommend!</p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                         <div className="profile">
                            <img src={image} alt="" />

                            <div className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star-half" aria-hidden="true"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="reviews-detail">
                           <p>From flabby to fit!. GGFC's program is the real deal.</p>
                        </div>
                    </div>
                    <div className="testimonial-box">
                    <div className="profile">
                            <img src={image} alt="" />

                            <div className="profile-detail">
                                <h4>Jane</h4>
                                <h5>BigFan Corp </h5>
                                    <div className="stars">
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star" aria-hidden="true"></i>
                                        <i class="fas fa-star-half" aria-hidden="true"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="reviews-detail">
                           <p>Shredded fat, gained confidence. Thanks GGFC's trainers!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;