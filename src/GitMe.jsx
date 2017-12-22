import React from 'react';
import request from 'superagent';

class GitMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gitme: {}
    };
  }

  componentDidMount() {
    const promise = request.get("https://api.github.com/users/kra3");
    const onSucess = (val) => { this.setState({ gitme: val.body }) };
    promise.then(onSucess);

  }

  render() {
    return (
      <div>
        <ol>
          {
            Object.keys(this.state.gitme).map((key) => {
              return <li>{key + " -> " + this.state.gitme[key]}</li>
            })
          }
        </ol>
        <hr />
      </div>
    );
  }
};

export default GitMe;
