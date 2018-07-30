import React from 'react';
import { List } from "immutable";
import { Link } from "react-router-dom";

export default ({sharedCode, topics, onClickFeedback, hasNewFeedback}) => {
	return (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="panel">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fas fa-comments" aria-hidden="true"></i></div>
				</div>
				<h2 className="panel-title">Feedback</h2> 
				{hasNewFeedback ? 
					<div>
						<p>You have new feedback for the following tasks:</p>
						{topics.map((topic, topicID) => (
							sharedCode.get(topic.get('short_title')) ? 
								sharedCode.get(topic.get('short_title')).map((task, taskID) => (
									task ? task.get('newFeedback') ? 
										<Link to={'/prep/topic/' + topicID + '/task/' + taskID} onClick={() => onClickFeedback(topic.get('short_title'), taskID)}>
											<p>{topic.get('short_title') + ' - task ' + taskID}</p> 
										</Link>
									: null : null
								)) 
							: null
						))}
					</div>
					: 
					<p>You have no new feedback</p>
				}
			</div>
		</div>
	)
}