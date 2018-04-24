import React from 'react';

export default ({ onClick, onCancel, onFormElementChange }) => (

	<div className="row issues-form col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<button className="popup-close" onClick={ onCancel }>✖</button>
		<form>
				<div className="form-group">
					<label>Issue Report for: </label>
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	id="issue" 
				    	placeholder="issue" 
				    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
				    />
				</div>
				<div className="form-group">
					<label>Description: </label>
				    <input 
				    	type="textarea" 
				    	className="form-control" 
				    	id="issue-description" 
				    	placeholder="Enter description of problem here" 
				    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
				    />
				</div>
				<div className="form-group">
					<label>Your name here: </label>
				    <input 
				    	type="name" 
				    	className="form-control" 
				    	id="issue-name"  
				    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
				    />
				</div>
				<div className="form-group">
					<label>Your email here: </label>
				    <input 
				    	type="email" 
				    	className="form-control" 
				    	id="issue-email" 
				    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
				    />
				</div>
				<div className="issue-buttons">	
					<button className="btn btn-submit" onClick={ onClick }>submit</button>
				</div>
		</form>
	</div>
)