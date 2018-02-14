import React from 'react';
import PropTypes from 'prop-types';
import parseRawInput from '../lib/parseRawInput';

const MarkdownOutput = props => (
  <div className="col-md-6">
    <span dangerouslySetInnerHTML={parseRawInput(props.rawInput)} />
  </div>
);

MarkdownOutput.propTypes = {
  rawInput: PropTypes.string.isRequired,
};

export default MarkdownOutput;
