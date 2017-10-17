import React from 'react';
import ModuleIcon from './ModuleIcon';

export default ({modules}) => (
	<div className="row">
		{ modules.map((i) => (
			<ModuleIcon key={ i } id={ i } />
		)) }
	</div>
)