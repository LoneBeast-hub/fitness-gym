import React from "react";

function Choice() {
    return (
        <div id="choice">
            <div className="container">
                <div className="choice--container">
                    <h2>why <span>choose </span> us </h2>
                        <ul className="choice--list">
                            <li className="choice--items">
                                <p className="choice--span">1</p>
                                <p className="choice--title">specicalized equipment</p>
                            </li>
                            <li className="choice--items">
                                <p className="choice--span">2</p>
                                <p className="choice--title">certified professional trainers</p>
                            </li>
                            <li className="choice--items">
                                <p className="choice--span">3</p>
                               <p className="choice--title">meeting environment wellness professionals</p> 
                            </li>
                            <li className="choice--items">
                                <p className="choice--span">4</p>
                                <p className="choice--title">relaxation spot</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Choice
