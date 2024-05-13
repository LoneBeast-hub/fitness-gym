import React from "react";
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div class="footer-container">
            <div class="footer-item">
              <h2 class="heading__footer u-margin-bottom-small">
                ABOUT goodness gym & fitness center
              </h2>
              <p class="footer__paragraph">
                At Goodness gym and fitness center, We understand that reaching
                your fitness goals requires more than just equipment and
                motivation. 
              </p>
            </div>

            <div class="footer-item">
              <h2 class="heading__footer u-margin-bottom-medium">
                visit the gym
              </h2>
              
              <p className="footer__paragraph acsd">Email Address</p>
                <Link to="goodnessgfc24@gmail.com" target="_blank" className=" u-margin-bottom-small footer__links " rel="noreferrer">goodnessgfc24@gmail.com</Link>
              <p class="footer__paragraph acsd">
                Phone no.
              </p>
              <span className="footer__paragraph u-margin-bottom-small">07063278712</span>
              <span class="footer__paragraph acsd">
                Address:
              </span>
                <address className="footer__paragraph"> No. 25 Osara Road, Gbonogun, Obantoko, Abeokuta</address>
            </div>

            <div class="footer-item">
              <h2 class="heading__footer u-margin-bottom-medium">
                follow us on:
              </h2>
              <div class="fa-icon">
                <Link to="https://www.facebook.com/share/ETqPvLiLRsigjarw/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
                  <i class="fab fa-facebook social-icon" aria-hidden="true"></i>
                </Link>
                <Link to="https://x.com/goodnessgfc?t=zEKsEzlA_caXXCVt3c5Y1Q&s=09" target="_blank" rel="noreferrer">
                  <i class="fab fa-twitter social-icon" aria-hidden="true" rel="noreferrer"></i>
                </Link>
                <Link to="https://www.instagram.com/goodnessgfc?igsh=bGhkYmE3MHBtaGps" target="_blank" rel="noreferrer">
                  <i
                    class="fab fa-instagram social-icon"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
