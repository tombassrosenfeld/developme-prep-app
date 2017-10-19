import React from 'react';
import ModuleIcon from './ModuleIcon';

export default ({modules}) => (
	<div className="row">
		{ modules.map(({id}, i) => (
			<ModuleIcon key={ i } id={ i }  />
		)) }
	</div>
)