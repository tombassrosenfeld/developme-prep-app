import React, {Component} from 'react';

class ForgotForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{
					label: 'Username',
					type: 'text',
					value: '',
				},
								{
					label: 'Email address',
					type: 'email',
					value: '',
				},
				{
					label: 'Password',
					type: 'password',
					value: '',
				}
			],
			errorMessage: '',
		}
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e, i) {
		const fields = [...this.state.fields];

		fields[i].value = e.target.value;

		this.setState({fields});
	}
	onSubmit(e) {
		e.preventDefault();
		const fields = this.state.fields;
		const fieldsHaveValues = fields.every(field => field.value);
		let errorMessage = '';

		//If password length is < 8
		if(fields[2].value.length < 8) {
			errorMessage = 'Your password must be a minimum of 8 characters';
		}

		if(!fieldsHaveValues) {
			errorMessage = 'Please enter values for all of the fields';
		}


		if(!errorMessage) {
			this.props.onSubmit(fields.map(field => ({
				data: field.label,
				value: field.value
			})));
		}

		this.setState({errorMessage});

	}
	render() {
		const {fields, errorMessage} = this.state;
		const {cancel} = this.props;
		return (
			<div className="col-xs-12"> 
				<div className="container register-form"> 
					<h2 className="register-form__header">Register</h2>
					<form onSubmit={this.onSubmit} className="row">
						{fields.map((field, i) => <div key={i} className="col-xs-12 col-sm-4">	
							<div className="form-group">
								<label>{field.label}</label>
							    <input 
							    	type={field.type} 
							    	className="form-control" 
							    	id={field.label}
							    	value={	field.value }
							    	onChange={ (e) => this.onChange(e, i) }
							    />
							</div>
						</div> )}
						<div className="col-xs-12 col-sm-4 col-md-8">
						{errorMessage ? <p className="registration-validation">{errorMessage}</p> : null}
						</div>
						<div className="col-xs-12 col-sm-4 col-md-2">
							<input className="btn btn-default btn-block btn-submit btn-register" type="submit" value="Register" />
						</div>
						<div className="col-xs-12 col-sm-4 col-md-2">
							<button onClick={cancel} className="btn btn-default btn-block">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ForgotForm;