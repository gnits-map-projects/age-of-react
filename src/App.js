import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatServer from './components/chat';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="container">
          <ChatServer />
          <hr />
            <footer>
              <p>&copy; Apple 2017</p>
            </footer>
        </div>
      </div>
    );
  }
}

export default App;
