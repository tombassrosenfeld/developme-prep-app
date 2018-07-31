import React, { Component } from 'react';

class StudentMarkingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }
    }

    onChange(e) {
    	this.setState({ comment: e.target.value });
    }

    disabled() {
    	return this.state.comment === '';
    }

    render() {
    	const { student, topicID, taskID, onClickFeedbackSubmit } = this.props;
    	return (
            <div>
                <p><strong>Please leave feedback for {student.get('slug')}</strong></p>
                <textarea 
                    className="form-control share-code__textarea" 
                    rows="5" 
                    value={this.state.comment}
                    onChange={(e) => this.onChange(e)}
                >
                </textarea>
                <button 
                    className="btn btn-default btn-logout bgrd-green pull-right" 
                    style={{marginBottom: '10px'}}
                    onClick={(e) => onClickFeedbackSubmit(student, this.state.comment, topicID, taskID)}
                    disabled={ this.disabled() }
                >
                Submit</button>
            </div>
    	)
    }
}
export default StudentMarkingForm;
