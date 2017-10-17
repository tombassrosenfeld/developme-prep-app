import React from 'react';

export default ({id}) => (
	<a href={ '/module/' + id } >
		<div className={'col-xs-3 col-sm-2 col-md-1 module-icon module-icon-' + id } >
		</div>
	</a>
)