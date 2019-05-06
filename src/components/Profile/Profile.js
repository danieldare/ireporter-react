import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  getIncidents,
  deleteIncident
} from '../../actions/actionCreators/profileAction';

const Profile = props => {
  const {
    profileData: { incidents, isDeleting, isLoading }
  } = props;

  const [isType, setTypeState] = useState(false);
  useEffect(() => {
    props.getIncidents();
  }, []);

  const onDeleteClick = idNum => {
    incidents.map(({ type, id }) => {
      if (type === 'red-flag' && id === +idNum) {
        return props.deleteIncident(id, 'red-flags');
      }
      if (type === 'intervention' && id === +idNum) {
        return props.deleteIncident(id, 'interventions');
      }

      return '';
    });
  };

  let draftCount = 0;
  let investigationCount = 0;
  let resolvedCount = 0;
  let rejectedCount = 0;

  const dataTable = (
    <section className="table-container">
      <table className="table">
        <thead>
          <tr className="th-head">
            <th>S/N</th>
            <th>Title</th>
            <th>Type</th>
            <th>Action {isDeleting ? <div className="spinner-2" /> : ''}</th>
          </tr>
        </thead>

        {!isLoading ? (
          incidents.map(({ title, type, id, status }, index) => {
            if (type === 'red-flag' && isType) {
              if (status === 'resolved') {
                resolvedCount += 1;
              } else if (status === 'rejected') {
                rejectedCount += 1;
              } else if (status === 'under-investigation') {
                investigationCount += 1;
              } else {
                draftCount += 1;
              }
            } else if (type === 'intervention' && !isType) {
              if (status === 'resolved') {
                resolvedCount += 1;
              } else if (status === 'rejected') {
                rejectedCount += 1;
              } else if (status === 'under-investigation') {
                investigationCount += 1;
              } else {
                draftCount += 1;
              }
            }
            return (
              <tbody key={id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{type}</td>
                  <td>
                    <Link
                      to={
                        type === 'red-flag'
                          ? `/view-single-redflag?id=${id}`
                          : `/view-single-intervention?id=${id}`
                      }
                      className="buttin"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="buttin del"
                      onClick={() => onDeleteClick(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <div className="spinner-tr">
            <div className="spinner-2" />
            <p>loading...</p>
          </div>
        )}
      </table>
      {isLoading === false && incidents.length < 1 ? (
        <p style={{ margin: '20px 0', textTransform: 'uppercase' }}>
          No incident found
        </p>
      ) : (
        ''
      )}
    </section>
  );

  return (
    <div className="container">
      <h2 className="user-info2">My Profile</h2>
      <div className="profile-head">
        <div className="profile-img">W</div>
        <div className="profile-info">
          <p className="email-holder">dodanieloluwadare@gmail.com</p>
          <p>Oluwadare Daniel Segun</p>
        </div>
      </div>
      <div className="type-family">
        <p
          className={`type-toggle ${isType ? ' active' : ' '}`}
          role="presentation"
          onClick={() => setTypeState(!isType)}
          onKeyDown={() => setTypeState(!isType)}
        >
          RedFlag
        </p>
        <p
          className={`type-toggle ${!isType ? ' active' : ' '}`}
          role="presentation"
          onClick={() => setTypeState(!isType)}
          onKeyDown={() => setTypeState(!isType)}
        >
          Intervention
        </p>
        <div className="types">
          <div className="type">
            <p className="type-number">{draftCount}</p>
            <p className="type-name">Draft</p>
          </div>
          <div className="type">
            <p className="type-number">{investigationCount}</p>
            <p className="type-name">Under-investigation</p>
          </div>
          <div className="type">
            <p className="type-number">{resolvedCount}</p>
            <p className="type-name">Resolved</p>
          </div>
          <div className="type">
            <p className="type-number">{rejectedCount}</p>
            <p className="type-name">Rejected</p>
          </div>
        </div>
        {dataTable}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profileData: state.profile
});

export default connect(
  mapStateToProps,
  { getIncidents, deleteIncident }
)(withRouter(Profile));
