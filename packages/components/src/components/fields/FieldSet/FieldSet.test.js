import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { FieldSet } from './FieldSet';

describe('Field label', () => {
	afterEach(cleanup);
	it('Matches snapshot', () => {
		const component = render(
			<FieldSet fieldType={'checkbox'} legend={'Check All options'}>
				<label htmlFor="one">One</label>
				<input id="one" type={'checkbox'} />
				<label htmlFor="two">Two</label>
				<input id="two" type={'checkbox'} />
			</FieldSet>
		);
		expect(component).toMatchSnapshot();
	});
});
