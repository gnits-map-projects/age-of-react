import React from 'react';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.name);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    render () {
        return (
            <div className="col-md-4">
                <h2>Contact me:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            onChange={this.handleNameChange}
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Short message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
       );
    }
}

export default ContactForm;
