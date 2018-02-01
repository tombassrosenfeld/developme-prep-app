import React from 'react';

export default ({ title, description, type, link}) => (
	<a href={link} target="_blank" className="resource-link" >
		<div className="panel" >
			<div className="row">
				<div className="col-xs-2 resource-icon-container">
					<i className={'fa fa-2x resource-icon ' + type}></i>
				</div>
				<div className="col-xs-10 resource-info">
					<h2 className="panel-title">{title}</h2>
					<p>{description}</p>
				</div>
			</div>
	  	</div>
	</a>
)