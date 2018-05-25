import React from 'react';

export default ({text, value, maxValue, progressPercentage}) => (
	<div>
		{text ? <p className="text-center">{text}</p> : null} 
		<div className="progress">
		  <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={maxValue} style={{width: progressPercentage}}>
		  	{progressPercentage}
		    <span className="sr-only">{progressPercentage} Complete</span>
		  </div>
		</div>
	</div>
)
