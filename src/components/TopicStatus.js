import React from 'react';
import { calculateTopicStatus } from '../utilities/utilities';

export default ({userProgress, topic}) => (
	<div className="topicStatus panel">
		<div className="row">
			<div className="col-xs-6"><h2 className="panel-title">Completed</h2></div>
			<div className="col-xs-2">
				<p className="topicStatus-stat topicStatus-done">0</p>
				{ true === false ? calculateTopicStatus(userProgress, topic)[0] : null}
				<p className="topicStatus-label">DONE</p>
			</div>
			<div className="col-xs-2">
				<p className="topicStatus-stat topicStatus-not-done">5</p>
				{ true === false ? calculateTopicStatus(userProgress, topic)[1] : null}
				<p className="topicStatus-label">NOT DONE</p>
			</div>
			<div className="col-xs-2">
				<div className="marker topicStatus-marker">
					{ calculateTopicStatus(userProgress, topic)[2] ? 
						<i className="fa fa-check-circle-o" aria-hidden="true"></i> : 
						<i className="fa fa-times-circle-o" aria-hidden="true"></i> 
					}
				</div>
			</div>
		</div>		
	</div>	
)