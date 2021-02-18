import React, { Component } from "react";

class Message extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="message">
        <span className="blue">{this.props.name + ": "}</span>
        {this.props.content}
      </div>
    );
  }
}

export default Message;
