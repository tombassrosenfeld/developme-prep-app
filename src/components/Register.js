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
		this.props.onSubmit(this.state.fields.map(field => ({
			data: field.label,
			value: field.value
		})));
	}
	render() {
		const {fields} = this.state;
		const {cancel} = this.props;
		return (
			<div class="col-xs-12"> 
				<div class="container"> 
					<form onSubmit={this.onSubmit} class="row">
						{fields.map((field, i) => <div className="col-xs-12 col-sm-6 col-md-4">	
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
						<div className="col-xs-12 col-sm-3 col-md-2">
							<input className="btn btn-default btn-login btn-block btn-submit" type="submit" />
						</div>
						<div className="col-xs-12 col-sm-3 col-md-2">
							<button onClick={cancel} className="btn btn-default btn-login btn-block">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ForgotForm;