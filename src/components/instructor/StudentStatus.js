import React from 'react';

export default ({progress, notDone}) => (
	<div className="topicStatus panel">
		<div className="row">
			<div className="col-xs-5"><h2 className="panel-title">Completed</h2></div>
			<div className="col-xs-2">
				<p className="topicStatus-stat topicStatus-done">
				{progress}
				</p>
				<p className="topicStatus-label">DONE</p>
			</div>
			<div className="col-xs-2">
				<p className="topicStatus-stat topicStatus-not-done">
				{notDone}
				</p>
				<p className="topicStatus-label">NOT DONE</p>
			</div>
			<div className="col-xs-3">
				<div className="marker topicStatus-marker">
				{ notDone > 0 ? 
					<i className="fa fa-times-circle-o" aria-hidden="true"></i> : 
					<i className="fa fa-check-circle-o" aria-hidden="true"></i>
				}
				</div>
			</div>
		</div>		
	</div>	
)