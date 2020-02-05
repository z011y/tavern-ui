import React, { Component } from "react";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-room">
        <h1 onClick={this.props.toggleMessageComponent}>Chat</h1>
        <div className="message-wrapper">
          <input type="text" placeholder="Type your message here" />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
