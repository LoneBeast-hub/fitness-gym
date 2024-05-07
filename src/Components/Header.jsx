import React from "react"
import { Link } from "react-router-dom";


function Header() {
    return (
        <div id="main">
            <div className="container">
                <div className="header-divide">
                    <div className="header-heading">
                        <h2>smash your <span>fitness </span>
                        goals</h2>
                        <Link to="#" className="btn">Join Now</Link>
                    </div>


                    <div className="rating">
                        <div className="members-rating">
                            <h2>40+</h2>
                            <span>Members</span>
                        </div>
                        <div className="members-rating">
                            <h2>10+</h2>
                            <span>expert trainer</span>
                        </div>
                        <div className="members-rating">
                            <h2>3+</h2>
                            <span>fitness program</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;
