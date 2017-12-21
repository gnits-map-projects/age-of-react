import React from 'react';
import ChatMessage from './ChatMessage';


class ChatWindow extends React.Component {
    render () {
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
                  <ChatMessage />
                  <ChatMessage />
                </ul>
              </div>
              <footer>
                <input type="text" className="form-control" placeholder="Say..." />
              </footer>
            </div>
        );
    }
}

export default ChatWindow;
