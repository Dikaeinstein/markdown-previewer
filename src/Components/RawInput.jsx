import React from 'react';
import PropTypes from 'prop-types';
import './RawInput.css';

const RawInput = (props) => {
  const handleChange = (e) => {
    const { value } = e.target;
    props.onChange(value);
  };

  return (
    <div className="col-md-6">
      <textarea
        defaultValue=""
        onChange={handleChange}
        rows="22"
        placeholder="Type your markdown text here!"
      />
    </div>
  );
};

RawInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RawInput;
