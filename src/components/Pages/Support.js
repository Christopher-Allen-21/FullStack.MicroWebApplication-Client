import React from 'react';
import '../../styling/Pages/Support.css'

class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Name', email: 'email@example.com', feedback: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="support-mailing">
                <h1>Get in touch with the ZipTube Creator Support team</h1>
                <div>
                    <p>Name:</p>
                    <input name="name" />
                    <p></p>
                    <p>Email:</p>
                    <input email="email" />
                    <p></p>
                    <p>Subject:</p>
                    <input subject="subject" />
                    <p></p>
                    <p>Message:</p>
      	<textarea
            name="name"
            email="email"
            subject="subject"
            onChange={this.handleChange}
            placeholder="Enter your message here."
            required
            value={this.state.feedback}
            style={{width: '75%', height: '150px'}}
        />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
            </form>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }

    handleSubmit() {
    }

    handleSubmit (event) {
        const templateId = 'template_id';

        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There seems to be a problem, please try again.', err))
    }


}

export default Support;
