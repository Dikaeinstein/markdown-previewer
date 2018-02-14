import React, { Component } from 'react';
import MarkdownOutput from './MarkdownOutput';
import RawInput from './RawInput';
import './MarkdownContainer.css';

class MarkdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(rawInput) {
    this.setState({ rawInput });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center title">Markdown Previewer</h2>
        <div className="row">
          <RawInput onChange={this.handleChange} />
          <MarkdownOutput rawInput={this.state.rawInput} />
        </div>
      </div>
    );
  }
}

export default MarkdownContainer;
