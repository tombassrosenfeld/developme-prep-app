import React from 'react';

export default ({ completed, onClick }) => (
	<div onClick={ onClick } className={ 'marker ' + completed }></div>
)