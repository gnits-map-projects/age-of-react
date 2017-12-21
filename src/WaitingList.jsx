import React from 'react';


class WaitingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <h2>Waiting List:</h2>
                <ol>
                    {
                        this.props.data.map(function (name) {
                            return (<li key={name}>{name}</li>);
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default WaitingList;
