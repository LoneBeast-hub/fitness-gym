import React from "react";
import image1 from "../assets/mdeadlift.png"
import image2 from "../assets/wdeadlift.png"
import image3 from "../assets/moments.png"
import image4 from "../assets/pushups.png"

function Moment() {
    return (
        <div id="moment">
            <div className="container">
                <h1 className="moment-heading u-margin-bottom-medium">gym <span>moments</span></h1>
 
                <div className="moment-container">
                    <img src={image1} alt="Back Pushups with weight" />
                    <img src={image2} alt="woman doing a deadlift" />
                    <img src={image4} alt="Rigourous Pushup" />
                    <img src={image3} alt="Moments in the gym" />
                </div>
            </div>
        </div>
    )
}

export default Moment
