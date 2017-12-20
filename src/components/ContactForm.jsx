import React from 'react';


class ContactForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onSubmit (event) {
        console.log(event, this.name.value, this.props);
        this.props.onSubmit({ name: this.name.value, email: this.state.email })
        event.preventDefault();
    }

    onEmailChange (event) {
        this.setState({ email: event.target.value });
    }

    render () {
        return (
            <div className={this.props.className}>
                <h2>Contact me:</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" ref={(el) => { this.name = el; } } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.onEmailChange}
                            value={this.state.email} />
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
};

export default ContactForm;
