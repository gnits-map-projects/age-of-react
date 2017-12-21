import React from 'react';
import ChatWindow from './ChatWindow';


class ChatServer extends React.Component {
    render (){
        return (
            <div class="row">
                <div class="col-md-6">
                    <ChatWindow />
                </div>
                <div class="col-md-6">
                    <ChatWindow />
                </div>
            </div>
        )
    }
}

export default ChatServer;
