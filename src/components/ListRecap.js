import React from 'react';

const ListRecap = (props) => {
	//console.log(props);
	return (
		<div>
			<p className="list-recap">
				<strong>{props.data.length === 1 ? `${props.data.length} item` : `${props.data.length} items`}</strong>{' '}
				<span>{props.total === 1 ? `${props.total} time` : `${props.total} times`}</span>
			</p>
		</div>
	);
};

export default ListRecap;
