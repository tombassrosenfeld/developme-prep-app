import React from 'react';
import ModuleIcon from './ModuleIcon';

export default ({modules, onClickIcon}) => (
	<div className="row">
		{ modules.map((module, i) => (
			<ModuleIcon 
				key={ i } 
				id={ module.get('id') } 
				title={ module.get('short_title') }
				selected={ module.get('selected') } 
				onClick={ () => onClickIcon(i) }
			/>
		)) }
	</div>
)