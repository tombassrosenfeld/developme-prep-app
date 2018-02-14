import React from 'react';
import TopicIcon from './TopicIcon';

export default ({topics, onClickIcon, className}) => (
	<div className={className}>
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-folder-o" aria-hidden="true"></i></div>
			</div>
			<h2 className="topics-title">Topics</h2>
				{ topics.map((topic, i) => (
					<TopicIcon 
						key={ i } 
						id={ topic.get('id') } 
						title={ topic.get('short_title') }
						selected={ topic.get('selected') } 
						onClick={ () => onClickIcon(i) }
					/>
				)) }
		</div>
	</div>
)