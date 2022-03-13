import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <Col>
        <Link to="/content">
          <div className="container">
            <div className="card">
              <div className="card__front card__part1">
                <img
                  className="card__front-square card__square"
                  src="https://i.imgur.com/lRG4VIS.png"
                  alt="Card"
                />
                <img
                  className="card__front-logo card__logo1"
                  src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                  alt="Card"
                />
                <p className="card_numer">**** **** **** 4215</p>
                <div className="card__space-75">
                  <span className="card__label">Card holder</span>
                  <p className="card__info">Dave D Dave</p>
                </div>
                <div className="card__space-25">
                  <span className="card__label">Expires</span>
                  <p className="card__info">12/26</p>
                </div>
              </div>
              <div className="card__back card__part1">
                <div className="card__black-line"></div>
                <div className="card__back-content">
                  <div className="card__secret">
                    <p className="card__secret--last">281</p>
                  </div>
                  <img
                    className="card__back-square card__square"
                    src="https://seeklogo.com/images/K/knet-logo-2360944FA2-seeklogo.com.png"
                    alt="Card"
                  />
                  <img
                    className="card__back-logo card__logo"
                    src="https://benefit.bh/wp-content/uploads/2021/08/GCCNetwork.png"
                    alt="Card"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="container1">
          <div className="card">
            <div className="card__front card__part">
              <img
                className="card__front-square card__square"
                src="https://i.imgur.com/lRG4VIS.png"
                alt="Card"
              />
              <img
                className="card__front-logo card__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                alt="Card"
              />
              <p className="card_numer">**** **** **** 2384</p>
              <div className="card__space-75">
                <span className="card__label">Card holder</span>
                <p className="card__info">Dave D Dave</p>
              </div>
              <div className="card__space-25">
                <span className="card__label">Expires</span>
                <p className="card__info">09/26</p>
              </div>
            </div>

            <div className="card__back card__part">
              <div className="card__black-line"></div>
              <div className="card__back-content">
                <div className="card__secret">
                  <p className="card__secret--last">726</p>
                </div>
                <img
                  className="card__back-square card__square"
                  src="https://seeklogo.com/images/K/knet-logo-2360944FA2-seeklogo.com.png"
                  alt="Card"
                />
                <img
                  className="card__back-logo card__logo"
                  src="https://benefit.bh/wp-content/uploads/2021/08/GCCNetwork.png"
                  alt="Card"
                />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Cards;
