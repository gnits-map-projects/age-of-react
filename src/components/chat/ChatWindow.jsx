import React from 'react';
import ChatMessage from './ChatMessage';


class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
    this.renderMessages = this.renderMessages.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  renderMessages() {
    const user = this.props.user;

    return this.props.history.map(function (value) {
      const name = (user === value.user) ? "me" : value.user;
      return <ChatMessage key={value.timestamp} name={name} when={value.timestamp} message={value.message} />
    })
  }

  handleSend(event) {
    if(event.keyCode === 13) { // enter key pressed
      this.props.handleSend(this.props.user, this.state.message, Date.now());
      this.setState({
        message: ""
      });
    }
  }

  render() {
    return (
      <div className="chat-window">
        <header>
          <div className="status">
            Online
                    <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
          </div>
        </header>
        <div className="messages">
          <ul>
            {
              this.renderMessages()
            }
          </ul>
        </div>
        <footer>
          <input
            type="text"
            className="form-control"
            placeholder="Say..."
            value={this.state.message}
            onChange={(event) => this.setState({ message: event.target.value })}
            onKeyDown={this.handleSend} />
        </footer>
      </div>
    );
  }
}

export default ChatWindow;
