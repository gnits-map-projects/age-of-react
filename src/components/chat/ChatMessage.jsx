import React from 'react';


class ChatMessage extends React.Component {
    render() {
        return (
            <li>
                <div className="message-container">
                    <div className="icon">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </div>
                    <div className="content">
                        <div className="meta">
                            <span className="name">@me</span>
                            <span className="timestamp">3 minutes ago</span>
                        </div>
                        <div className="message">
                            Hey, what are you up to?
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}


export default ChatMessage;
