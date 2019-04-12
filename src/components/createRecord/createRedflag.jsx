import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import InputField, { TextAreaField } from '../InputFields/InputField';
import './createRecord.css';
import { createRecord } from '../../actions/postActions';
// import Roll from '../../../public/images/spinner.gif';

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
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'POST_FAILED') {
        this.setState({ msg: error.msg.errors });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  // onDrop = files => {
  //   // POST to a test endpoint for demo purposes
  //   const req = request.post('https://httpbin.org/post');

  //   files.forEach(file => {
  //     req.attach(file.name, file);
  //   });

  //   req.end();
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.error) {
  //     this.setState({ msg: nextProps.error });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.error !== prevState.msg) {
  //     return { msg: nextProps.error.msg.errors };
  //   }
  // }

  isEmpty = str => {
    return !str.replace(/\s+/, '').length;
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, comments, location, status, images, videos } = this.state;
    // this.setState({ isCreating: true });

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

    // if (this.isEmpty(title)) {
    //   setState({msg:  })
    // }

    this.props.createRecord(formData);
    this.setState({ isCreating: false });
    e.target.reset();
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

    const { isCreating } = this.props;
    return (
      <div className="position-center">
        {isCreating ? <div className="overlay-loading" /> : ''}
        <div className="heading-story">
          <p>Tell Us About it,</p>
          <p> We can build a better Nation</p>
          <a href="##" className="view-record">
            View redflag records
          </a>
        </div>
        <div className="form-container">
          <h4 className="form-title">Create Red-flag record</h4>
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
              classname={msg.title ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
              value={title}
            />
            <TextAreaField
              placeholder="description"
              name="comments"
              onChange={this.onChange}
              error={msg.comments}
              classname={msg.comments ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
              value={comments}
            />
            <InputField
              placeholder="location"
              name="location"
              onChange={this.onChange}
              error={msg.location}
              classname={msg.location ? ' danger' : ''}
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

            <input
              onChange={e => {
                Array.from(e.target.files).forEach(file =>
                  this.setState(prevState => {
                    if (file.size > 25097152) {
                      return toast.error('File is too big');
                    }
                    return {
                      videoName: prevState.imageName.concat(file.name)
                    };
                  })
                );
                this.setState({ videos: e.target.files });
              }}
              type="file"
              className="inputfile"
              id="file-1"
              multiple="multiple"
              accept="video/mp4,video/x-m4v,video/*"
            />

            <label htmlFor="file-1">Choose a Video</label>
            {videoName.map(name => (
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
  console.log(state);
  return {
    error: state.error,
    posts: state.posts,
    isCreating: state.post.isCreating
  };
};

export default connect(
  mapStateToProps,
  { createRecord }
)(CreateIncident);
