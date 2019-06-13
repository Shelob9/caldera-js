import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField } from '@calderajs/components';
import { ConditionalLine } from './ConditionalLine';

export const ConditionalRule = ({
	group,
	onChange,
	fields,
	magics,
	isLast,
	addLine,
	removeLine
}) => {
	return (
		<div className={`caldera-condition-group caldera-condition-lines`}>
			{Object.keys(group).map(lineId => {
				const changeHandler = update => {
					onChange({
						...group,
						[lineId]: update,
					});
				};
				return (
					<Fragment key={lineId}>
						<ConditionalLine
							addLine={addLine}
							removeLine={removeLine}
							line={group[lineId]}
							id={lineId}
							onChange={changeHandler}
							fields={fields}
							magics={magics}
							isFirst={Object.keys(group).indexOf(lineId) === 0}
						/>
						{!isLast && <span>or</span>}
					</Fragment>
				);
			})}
		</div>
	);
};
