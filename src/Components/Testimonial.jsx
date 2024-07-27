import React from "react";
import image1 from "../assets/trainee.jpg";
import image2 from "../assets/trainee2.jpg";

function Testimonial() {
  return (
    <div id="testimonial">
        <div className="container">
            <h1 className="testimonial--heading u-margin-bottom-normal">
            {" "}
            what <span>people say </span>
            </h1>

            <div className="testimonial-container">
                <div className="testimonial-box">
                    <div className="profile">
                        <img src={image1} alt="" />

                        <div className="profile-detail">
                            <h4>M.K. Abolanle ESQ</h4>
                            <h5> Trainee </h5>
                            <div className="stars">
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-detail">
                        <p>
                            I wholeheartedly recommend GGFC! The State-of-the-art equipment,
                            knowledgeable and friendly staff, and clean welcoming
                            environment make every visit exceptional. With classes for all
                            fitness levels and personalized trainer attention, I've made
                            significant progress and transformed my fitness journey. Five
                            stars and highly recommended!
                        </p>
                    </div>
                </div>

                <div className="testimonial-box">
                    <div className="profile">
                        <img src={image2} alt="" />

                        <div className="profile-detail">
                            <h4>Mrs. Orente </h4>
                            <h5>Trainee</h5>
                            <div className="stars">
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-detail">
                        <p>
                            I'm thrilled to recommend GGFC. The facility is well-equipped
                            and boasts a team of professional instructors who genuinely care
                            about their client's well-being. They expertly guide,
                            demonstrate, and check in with clients to ensure successful
                            sessions, all while providing motivation to push to our best
                        </p>
                    </div>
                </div>          
            </div> 
        </div>
    </div>
  );
}

export default Testimonial;
