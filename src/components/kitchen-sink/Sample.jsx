import React from 'react';


class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };

        this.props.log('--> Sample: constructor');
    }

    render() {
        this.props.log('--> Sample: render');

        return (
            <div>
                <span>{this.props.title}</span>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={() => this.setState({checked: !this.state.checked})} />
            </div>
        );
    }

    componentWillMount() {
        this.props.log('--> Sample: will mount');
    }

    componentDidMount() {
        this.props.log('--> Sample: did mount');
    }

    componentWillUnmount() {
        this.props.log('--> Sample: will unmount');
    }

    componentWillReceiveProps(nextProps) {
        this.props.log('--> Sample: will recieve props', this.props, nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.props.log('--> Sample: should I Update', this.props, nextProps, this.state, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.log('--> Sample: will update', this.props, nextProps, this.state, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.log('--> Sample: did update', this.props, prevProps, this.state, prevState);
    }
};

export default Sample;
