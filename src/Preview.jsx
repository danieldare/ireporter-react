import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends Component {
  constructor() {
    super();
    this.onDrop = files => {
      this.setState({ files });
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    const drag = {
      background: '#da836747',
      padding: '10px',
      color: 'black',
      textAlign: 'center',
      borderRadius: '4px'
    };

    const aside = {
      padding: '10px 20px'
    };

    const ul = {
      color: '#da8367'
    };

    return (
      <Dropzone accept="video/*" onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input file={getInputProps()} name="image" />
              <p style={drag}>Drag 'n' drop or select a video file</p>
            </div>
            <aside style={aside}>
              <h4>{files.length < 0 ? 'Files' : ''}</h4>
              <ul style={ul}>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default FileUpload;
