import React from 'react';
import TopicIcon from './TopicIcon';

export default ({topics, onClickIcon}) => (
	<div className="row">
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
)