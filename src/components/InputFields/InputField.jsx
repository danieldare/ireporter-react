import React from 'react';
import PropTypes from 'prop-types';
import './inputField.css';

const InputField = ({
  name,
  placeholder,
  value,
  label,
  error,
  type,
  info,
  onChange,
  disabled,
  classname,
  focus,
  accept,
  multiple
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${classname}`}
        onFocus={focus}
        accept={accept}
        multiple={multiple}
      />
      {error && <small className="info-error">{error}</small>}
    </div>
  );
};

export const TextAreaField = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  onChange,
  disabled,
  classname,
  focus
}) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`textarea-field ${classname}`}
        onFocus={focus}
      />
      {error && <small className="info-error">{error}</small>}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
