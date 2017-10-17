import React from 'react';
import ModuleIcon from './ModuleIcon';

export default ({modules}) => (
	<div className="row" style={{border: '1px solid black', height: '100px'}}>
		{ modules.map((i) => (
			<ModuleIcon key={ i } id={ i } />
		)) }
	</div>
)