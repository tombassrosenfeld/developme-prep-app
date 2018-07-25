import React, { Component } from 'react';

class IssuesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }

        // this.change = this.change.bind(this);
    }

    onChange(e) {
    	this.setState({ comment: e.target.value });
    }

    disabled() {
    	return this.state.comment == '';
    }

    render() {
    	const { studentName } = this.props;
    	return (
            <div>
                <p><strong>Please leave feedback for {studentName}</strong></p>
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
                    onClick={() => console.log('clicked')}
                    disabled={ this.disabled() }
                >
                Submit</button>
            </div>
    	)
    }
}
export default IssuesForm;
