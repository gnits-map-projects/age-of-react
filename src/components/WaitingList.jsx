import React from 'react';


class WaitingList extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <h2>Waiting List:</h2>
                <ol>
                    {
                        this.props.data.map((name) => (<li key={name}>{name}</li>))
                    }
                </ol>
            </div>
        );
    }
};

export default WaitingList;
