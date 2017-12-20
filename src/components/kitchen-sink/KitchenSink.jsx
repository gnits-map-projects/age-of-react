import React from 'react';
import Sample from './Sample';


class KitchenSink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "Is it true that Joey share his food?",
        };
        this.logger = this.logger.bind(this);
    }

    logger(text) {
        this.setState({ logs: [...this.state.logs, text]});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="question"> Give a question </label>
                    <input
                        type="text"
                        value={this.state.question}
                        onChange={(ev) => this.setState({question: ev.target.value})} />
                    <hr/>
                    <Sample
                        title={this.state.question}
                        log={console.log} />
                </div>
            </div>
        );
    };
}

export default KitchenSink;
