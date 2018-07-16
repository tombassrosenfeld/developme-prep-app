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
					type: 'passwword',
					value: '',
				}
			]
		}
	}
	onChange(e, i) {
		const fields = [...this.state.fields];

		fields[i].value = e.target.value;

		this.setState({fields});
	}
	render() {
		const {fields} = this.state;
		return (
			<form>
				{fields.map((field, i) => <div className="col-sm-4 col-sm-offset-1">	
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
				<div className="col-sm-offset-1 col-sm-10">
					<div className="col-sm-4 col-sm-offset-1">	
						<input className="btn btn-default btn-login btn-block" type="submit" />
					</div>
					<div className="col-sm-4 col-sm-offset-1">	
						<button className="btn btn-default btn-login btn-block">Cancel</button>
					</div>
				</div>
			</form>
		);
	}
}

export default ForgotForm;