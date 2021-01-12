import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ArrowClockwise } from 'react-bootstrap-icons';

const ListRecap = (props) => {
	//console.log(props);
	const count_reducer = useSelector((state) => state.api_reducer);
	// console.log(count_reducer);

	return (
		<div>
			<p className="list-recap">
				<strong className="mr-1">{props.data.length === 1 ? `${props.data.length} item` : `${props.data.length} items`}</strong>{' '}
				<span className="mr-1">{props.total === 1 ? `${props.total} time` : `${props.total} times`}</span>
				{count_reducer.loadingInternal ? (
					<Fragment>
						<ArrowClockwise color="#ff9500" /> <span className="primary-color">Refreshing...</span>
					</Fragment>
				) : (
					<ArrowClockwise />
				)}
			</p>
		</div>
	);
};

export default ListRecap;
