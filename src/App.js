import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import WaitingList from './components/WaitingList';

class App extends Component {
  constructor (props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.state = {
      registrations: [],
    };
  }

  onRegister (data) {
    this.setState({ registrations: [data, ...this.state.registrations]})
  }

  render() {
    return (
      <div>
        <WaitingList className="col-md-4" data={this.state.registrations} />
        <ContactForm className="col-md-4" onSubmit={this.onRegister} />
      </div>
    )
  }
}

export default App;
