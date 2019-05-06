import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField, { TextAreaField } from '../InputFields/InputField';
import { createRecord } from '../../actions/actionCreators/postActions';

class CreateIncident extends Component {
  state = {
    title: '',
    comments: '',
    location: '',
    status: 'draft',
    images: [],
    imageName: [],
    videos: [],
    videoName: [],
    msg: ''
  };

  baseState = this.state;

  componentDidUpdate(prevProps) {
    const {
      error,
      success,
      match: { url }
    } = this.props;
    if (error !== prevProps.error) {
      this.setState({ msg: error });
    } else if (success !== prevProps.success) {
      setTimeout(() => {
        if (url === '/create-intervention') {
          return this.props.history.push(`/view-intervention`);
        }
        if (url === '/create-redflag') {
          return this.props.history.push(`/view-redflag`);
        }
      }, 2000);
    }
  }

  resetForm = () => {
    this.setState(this.baseState);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, comments, location, status, images, videos } = this.state;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('comments', comments);
    formData.append('location', location);
    formData.append('status', status);
    Array.from(images).forEach(image => {
      formData.append('images', image);
    });

    Array.from(videos).forEach(video => {
      formData.append('videos', video);
    });

    const {
      match: { url },
      success
    } = this.props;

    if (url === '/create-redflag') {
      this.props.createRecord(formData, 'red-flags');
    }

    if (url === '/create-intervention') {
      return this.props.createRecord(formData, 'interventions');
    }
  };

  onFocusClear = target => {
    const prevMsg = { ...this.state.msg };
    delete prevMsg[target];
    this.setState({ msg: prevMsg });
  };

  render() {
    const {
      title,
      comments,
      location,
      images,
      videos,
      status,
      msg,
      imageName,
      videoName
    } = this.state;

    const {
      isCreating,
      match: { url }
    } = this.props;

    return (
      <div className="position-center">
        {isCreating ? <div className="overlay-loading" /> : ''}
        <div className="heading-story">
          <p>Tell Us About it,</p>
          <p> We can build a better Nation</p>
          <Link
            to={
              url === '/create-redflag' ? '/view-redflag' : '/view-intervention'
            }
            className="view-record"
          >
            View {url === '/create-redflag' ? ' Redflag ' : ' Intervention '}
            records
          </Link>
        </div>
        <div className="form-container">
          <h4 className="form-title">
            Create{url === '/create-redflag' ? ' Redflag ' : ' Intervention '}
            record
          </h4>
          <form
            onSubmit={this.onSubmit}
            noValidate
            encType="multipart/form-data"
          >
            <InputField
              placeholder="title"
              name="title"
              onChange={this.onChange}
              error={msg.title}
              classname={msg.title && ' danger'}
              focus={e => this.onFocusClear(e.target.name)}
              value={title}
            />
            <TextAreaField
              placeholder="description"
              name="comments"
              onChange={this.onChange}
              error={msg.comments}
              classname={msg.comments && ' danger'}
              focus={e => this.onFocusClear(e.target.name)}
              value={comments}
            />
            <InputField
              placeholder="location (e.g 6.5243793, 3.3792057)"
              name="location"
              onChange={this.onChange}
              error={msg.location}
              classname={msg.location && ' danger'}
              focus={e => this.onFocusClear(e.target.name)}
              value={location}
            />

            <input
              onChange={e => {
                Array.from(e.target.files).forEach(file =>
                  this.setState(prevState => {
                    return {
                      imageName: prevState.imageName.concat(file.name)
                    };
                  })
                );
                this.setState({ images: e.target.files });
              }}
              type="file"
              className="inputfile"
              id="file"
              multiple="multiple"
              accept="image/*"
            />
            <label htmlFor="file">Choose an Image</label>
            {imageName.map(name => (
              <li key={name} className="imagename">
                {name}
              </li>
            ))}

            <button className="btn--auth" type="submit" disabled={isCreating}>
              {isCreating ? <span className="spinner" /> : 'Submit'}
            </button>

            <button
              className="btn--reset"
              onClick={() => {
                this.setState(this.baseState);
              }}
              type="reset"
            >
              Reset
            </button>
          </form>
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
            className="login__img"
            alt="img"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.post.isCreating,
    error: state.post.error,
    success: state.post.success,
    posts: state.profile
  };
};

export default connect(
  mapStateToProps,
  { createRecord }
)(CreateIncident);
