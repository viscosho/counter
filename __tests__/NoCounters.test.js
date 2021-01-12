import React from 'react';
import renderer from 'react-test-renderer';
import NoCounters from '../src/components/NoCounters';

it('renders correctly', () => {
	const tree = renderer.create(<NoCounters />).toJSON();
	expect(tree).toMatchSnapshot();
});
