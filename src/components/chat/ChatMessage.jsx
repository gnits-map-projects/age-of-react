import React from 'react';
import moment from 'moment';


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
                            <span className="name">@{this.props.name}</span>
                            <span className="timestamp">{moment(this.props.when).fromNow()}</span>
                        </div>
                        <div className="message">{this.props.message}</div>
                    </div>
                </div>
            </li>
        );
    }
}


export default ChatMessage;
