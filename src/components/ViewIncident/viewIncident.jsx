import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { fetchIncident } from '../../actions/actionCreators/viewIncident';

const viewIncident = props => {
  const {
    match: { url }
  } = props;
  useEffect(() => {
    if (url === '/view-redflag') {
      props.fetchIncident('red-flags');
    }
    if (url === '/view-intervention') {
      props.fetchIncident('interventions');
    }
  }, []);

  const {
    Records: { incidents, isFetching }
  } = props;

  let records = '';

  if (isFetching) {
    records = <div className="spinner-2" />;
  }

  if (!isFetching) {
    records = incidents
      .sort((a, b) => (a.id < b.id ? 1 : -1))
      .map(record => {
        let img = '';
        if (record.status === 'draft')
          img =
            'https://res.cloudinary.com/decqfpglp/image/upload/v1556488892/envelope.png';
        else if (record.status === 'rejected')
          img =
            'https://res.cloudinary.com/decqfpglp/image/upload/v1551650056/cancel.png';
        else if (record.status === 'resolved')
          img =
            'https://res.cloudinary.com/decqfpglp/image/upload/v1551647685/checked.png';
        else if (record.status === 'under-investigation')
          img =
            'https://res.cloudinary.com/decqfpglp/image/upload/v1551650337/Rolling-5s-200px.gif';

        return (
          <div className="one-record" key={record.createdon}>
            <div className="left-border__record">
              <small className="one-record__title--small">Title</small>
              <p className="one-record__title-response--small">
                {record.title}
              </p>
              <p className="one-response__type--small">{record.type}</p>
            </div>
            <div className="one-record__status-response--small">
              <img src={img} className="tick--small" alt="img" />
              {record.status}
              <p className="one-record__location">
                Location: {record.location}
              </p>
            </div>

            <div className="one-record__footer">
              <p className="one-record__time">
                {dayjs(record.createdon)
                  .add(1, 'day')
                  .subtract(1, 'year')
                  .toString()}
              </p>
              <Link
                to={
                  url === '/view-redflag'
                    ? `/view-single-redflag?id=${record.id}`
                    : `/view-single-intervention?id=${record.id}`
                }
                className="one-record__view-detail"
              >
                view details
              </Link>
            </div>
            <img
              src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
              className="view__img"
              alt="img"
            />
          </div>
        );
      });
  }

  if (!isFetching && !incidents.length) records = <span>NO RESULTS FOUND</span>;

  return (
    <div className="container">
      <p className="record-title">
        {url === '/view-intervention'
          ? 'Intervention Records'
          : 'Redflag Records'}
      </p>
      <div className="records">{records}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Records: state.Records
  };
};

export default connect(
  mapStateToProps,
  { fetchIncident }
)(withRouter(viewIncident));
