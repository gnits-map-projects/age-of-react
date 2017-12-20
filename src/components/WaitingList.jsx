import React from 'react';


class WaitingList extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <h2>Waiting List:</h2>
                <ol>
                    {
                        this.props.data.map(({name, email}) => (<li key={name}>{name + "  " + email}</li>))
                    }
                </ol>
            </div>
        );
    }
};

export default WaitingList;
