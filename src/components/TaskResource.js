import React from 'react';

export default ({ title, description, type, link, duration}) => (
	<a href={link} target="_blank" className="resource-link" >
		<div className="panel" >
			<div className="row">
				<div className="col-xs-2 resource-icon-container">
					<i className={'fa fa-2x resource-icon ' + type}></i>
				</div>
				<div className="col-xs-8 resource-info">
					<h2 className="panel-title">{title}</h2>
					<p>{description}</p>
				</div>
				{duration ? 
				<div className="col-xs-2 resource-duration">
					<i className="fa fa-clock-o" aria-hidden="true"></i>
					<p className="duration"><span>{duration < 1 ? '0'+duration : duration}</span> hours</p>
				</div> : null }
			</div>
	  	</div>
	</a>
)