import React from 'react';

export default ({id, topics}) => (
	<div className={ 'col-xs-12 col-md-6' }>
  		<h1>Topic { +id + 1} <small>{ topics.getIn([id, 'title']) }</small></h1>
  		<p>{ topics.getIn([id, 'description']) }</p>
	</div>
)