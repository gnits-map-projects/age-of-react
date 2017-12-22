import React from 'react';
import ChatWindow from './ChatWindow';

const USER1 = "Arun";
const USER2 = "Mattias";

class ChatServer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chatHistory: [],
        }

        this.receiveMessage = this.receiveMessage.bind(this);
    }

    receiveMessage(user, message, timestamp) {
        this.setState({
            chatHistory: [
                ...this.state.chatHistory,
                { user, message, timestamp }
            ]
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <ChatWindow
                        user={USER1}
                        history={this.state.chatHistory}
                        handleSend={this.receiveMessage} />
                </div>
                <div className="col-md-6">
                    <ChatWindow
                        user={USER2}
                        history={this.state.chatHistory}
                        handleSend={this.receiveMessage} />
                </div>
            </div>
        )
    }
}

export default ChatServer;
