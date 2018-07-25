import React, { Component } from 'react';

class IssuesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }

        // this.submit = this.submit.bind(this);
    }

    onChange(e) {
    	this.setState({ comment: e.target.value });
    }

    disabled() {
    	return this.state.comment == '';
    }
    submit(e, student, sharedCode, comment) {
        console.log([student, sharedCode, comment]);
    }

    render() {
    	const { student, sharedCode } = this.props;
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
                    onClick={(e) => this.submit(e, student.toJS(), sharedCode.toJS(), this.state.comment)}
                    disabled={ this.disabled() }
                >
                Submit</button>
            </div>
    	)
    }
}
export default IssuesForm;
