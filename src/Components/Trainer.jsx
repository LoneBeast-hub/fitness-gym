import React from "react";
import image4 from "../assets/instructor.jpg";

function Trainer() {
    return (
        <div id="trainers">
            <div className="container">
                <h1 className="trainer--heading">
                    our <span>trainers </span>
                </h1>
                <div className="trainer--container">
                    {/* <div className="trainer--items">
                        <img src={image1} alt="Trainer 1" className="trainers--photo u-margin-bottom-small"/>
                        <h2 className="trainer--name">BlueVine</h2>
                        <h4 className="trainer-description">Coach</h4>
                    </div>
                    <div className="trainer--items">
                        <img src={image2} alt="Trainer 2" className="trainers--photo u-margin-bottom-small"/>
                        <h2 className="trainer--name">Israel</h2>
                        <h4 className="trainer-description">Male Fitness Coach</h4>
                    </div>
                    <div className="trainer--items">
                        <img src={image3} alt="Trainer 3" className="trainers--photo u-margin-bottom-small"/>
                        <h2 className="trainer--name">Olayori</h2>
                        <h4 className="trainer-description">Female Fitness Coach</h4>
                    </div> */}
                    <div className="trainer--items">
                        <img src={image4} alt="Trainer 4" className="trainers--photo u-margin-bottom-small"/>
                        <h2 className="trainer--name">Abegunde Aduragbemi</h2>
                        <h4 className="trainer-description" >Gym Instructor</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainer

