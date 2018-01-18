import React from 'react';
import { Link } from "react-router-dom";

export default ({id, selected, title, onClick}) => (
	<Link to={ '/topics/' + id }>
		<div 
			className={'col-xs-3 col-sm-2 col-md-2 topic-icon'} 
			onClick={ onClick } 
			style={{ backgroundColor: selected ? '#00e6b8' : '#b1ddd4', }}
		>
			<div 
				className={ 'topic-icon-inner' } 
				style={{border: selected ? 'solid 10px #FFF' : 'none'}}
			>
				<h1>{ title }</h1>
			</div>
		</div>
    </Link>
)