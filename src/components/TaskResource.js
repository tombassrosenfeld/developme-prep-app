import React from 'react';

export default ({ title, description, type, link, duration}) => (
	<a href={link} target="_blank" className="resource-link" >
		<div className="panel" >
			<div className="row">
				<div className="col-xs-2 resource-icon-container">
					<i className={'fa fa-2x resource-icon ' + type}></i>
				</div>
				<div className="col-xs-7 resource-info">
					<h2 className="panel-title">{title}</h2>
					<p>{description}</p>
				</div>
				{duration ? 
				<div className="col-xs-3 resource-duration">
					<i className="fa fa-clock-o" aria-hidden="true"></i>
					<p className="duration"><span>{duration}</span> {duration > 1 || +duration === 0.5 ? 'hours' : 'hour' }</p>
				</div> : null }
			</div>
	  	</div>
	</a>
)