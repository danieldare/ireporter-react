import React from 'react';
import InputField from '../InputFields/InputField';
import './createRecord.css';

const CreateIntervention = () => (
  <div className="position-center">
    <div className="heading-story">
      <p>Tell Us About it,</p>
      <p> We can build a better Nation</p>
      <a href="##" className="view-record">
        View Intervention records
      </a>
    </div>
    <div className="form-container">
      <h4 className="form-title">Create Intervention record</h4>
      <form>
        <InputField placeholder="title" name="title" />
        <textarea className="textarea-field" placeholder="description" />
        <InputField placeholder="location" name="location" />
        <button className="btn--auth" type="submit">
          Submit
        </button>
      </form>
      <img
        src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
        className="login__img"
        alt="another"
      />
    </div>
  </div>
);

export default CreateIntervention;
