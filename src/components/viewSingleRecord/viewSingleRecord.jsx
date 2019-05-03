import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { withRouter, Link } from 'react-router-dom';
import './oneRecord.css';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { TextAreaField } from '../InputFields/InputField';
import { fetchOneRecord } from '../../actions/actionCreators/singleRecord';

const viewOneRedflag = props => {
  const {
    location: { search },
    match: { url }
  } = props;
  const id = search.split('=')[1];

  useEffect(() => {
    if (url === '/view-single-redflag') {
      props.fetchOneRecord(id, 'red-flags');
    }
    if (url === '/view-single-intervention') {
      props.fetchOneRecord(id, 'interventions');
    }
  }, []);

  const {
    history,
    isFetching,
    viewOne: { title, type, status, location, comments, createdon, images }
  } = props;

  const fetchImg = (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}
    >
      {typeof images === 'string' &&
        images
          .split(',')
          .map(img => (
            <img
              src={img}
              alt="img"
              style={{ width: '500px', height: '400px' }}
            />
          ))}
    </div>
  );

  return (
    <div className="container">
      <div className="single-container">
        <div className="heading-part">
          <div className="left-border__record">
            <small className="one-record__title">Title</small>
            <p className="one-record__title-response">{title}</p>
            <p className="one-response__type">{type}</p>
          </div>

          <Link
            onClick={() => history.goBack()}
            as="button"
            to
            className="go-back"
          >
            go back
          </Link>
        </div>
        <div className="one-record__status-response">
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1556488892/envelope.png"
            className="tick"
            alt="img"
          />
          {status}
          <p className="one-record__location">Location: {location}</p>
        </div>
        <div className="description-incident">
          <div className="description__title">
            <div>
              Description of Incident
              <p className="one-record__time">
                {dayjs(createdon)
                  .add(1, 'day')
                  .subtract(1, 'year')
                  .toString()}
              </p>
            </div>
            <Link
              type="button"
              to={`/edit-comment?id=${id}`}
              className="edit-btn"
            >
              Edit Description
            </Link>
          </div>

          <p className="description-incident__brief">{comments}</p>
          <p className="location-title">Location</p>
          <div className="map-container">
            <Map
              className="map"
              google={window.google}
              center={{
                lat: typeof location === 'string' && location.split(',')[0],
                lng: typeof location === 'string' && location.split(',')[1]
              }}
              zoom={15}
            />
          </div>
        </div>

        <hr />
        {isFetching && (
          <div className="loading-overlay">
            <div className="spinner-2" />
          </div>
        )}
        <div className="no-media">
          {images === 'null' && typeof images === 'string'
            ? 'No media Found'
            : fetchImg}
        </div>
      </div>

      <div />
    </div>
  );
};

const mapStateToProps = state => ({
  viewOne: state.singleRecord.incident,
  isFetching: state.singleRecord.isFetching
});

export default GoogleApiWrapper({
  apiKey: 'AIzaSyApBXNZ8DfcSajnuuNOEMWNNH0eIZdBtws'
})(
  connect(
    mapStateToProps,
    { fetchOneRecord }
  )(withRouter(viewOneRedflag))
);
