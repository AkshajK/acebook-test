import React, { Component } from "react";
import { post } from "../../utilities";

class NewMessage extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
   
    return (
      <>
        <input type="text" value={this.state.content} 
        onChange={(event) => {
          this.setState({content: event.target.value})
        }} />
        <button onClick={() => {
          if(!this.props.loggedIn) {
            console.log("Not logged in");
            return;
          }
          post("/api/newmessage", {content: this.state.content});
          this.setState({content: ""})
        }}>
          Post
        </button>
      </>
    );
  }
}

export default NewMessage;
