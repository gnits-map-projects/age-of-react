import React from 'react';
import WaitingList from './WaitingList';
import ContactForm from './ContactForm';


class Registration extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            waitingList: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(name) {
        this.setState({waitingList: [...this.state.waitingList, name]});
    }

    render () {
        return (
            <div>
                <WaitingList data={this.state.waitingList} />
                <ContactForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}


export default Registration;
