import React from 'react';
import { Link } from 'react-router-dom';
import './viewRedflag.css';

const viewRedflag = () => (
  <div className="container">
    <p className="record-title">Redflag Records</p>
    <div className="records">
      <div className="one-record">
        <div className="left-border__record">
          <small className="one-record__title">Title</small>
          <p className="one-record__title-response">Extortion by the police</p>
          <p className="one-response__type">Intervention</p>
        </div>
        <div className="one-record__status-response">
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1551647685/checked.png"
            className="tick"
            alt="img"
          />
          resolved{' '}
          <p className="one-record__location">Location: 3.4324 , 423434</p>
        </div>

        <div className="one-record__footer">
          <p className="one-record__time">21st feb. 2018</p>
          <Link to="/view-oneredflag" className="one-record__view-detail">
            view details
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
          className="view__img"
          alt="img"
        />
      </div>
      <div className="one-record">
        <div className="left-border__record">
          <small className="one-record__title">Title</small>
          <p className="one-record__title-response">damaged Bridge</p>
          <p className="one-response__type">Intervention</p>
        </div>
        <div className="one-record__status-response">
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1551650056/cancel.png"
            className="tick"
            alt="img"
          />
          rejected{' '}
          <p className="one-record__location">Location: 3.4324 , 423434</p>
        </div>

        <div className="one-record__footer">
          <p className="one-record__time">21st feb. 2018</p>
          <a href="##" className="one-record__view-detail">
            view details
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
          className="view__img"
          alt="img"
        />
      </div>
      <div className="one-record">
        <div className="left-border__record">
          <small className="one-record__title">Title</small>
          <p className="one-record__title-response">damaged Bridge</p>
          <p className="one-response__type">Intervention</p>
        </div>
        <div className="one-record__status-response">
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1551650337/Rolling-5s-200px.gif"
            className="tick"
            alt="img"
          />
          under-investigation{' '}
          <p className="one-record__location">Location: 3.4324 , 423434</p>
        </div>

        <div className="one-record__footer">
          <p className="one-record__time">21st feb. 2018</p>
          <a href="#h" className="one-record__view-detail">
            view details
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
          className="view__img"
          alt="img"
        />
      </div>
    </div>
  </div>
);

export default viewRedflag;
