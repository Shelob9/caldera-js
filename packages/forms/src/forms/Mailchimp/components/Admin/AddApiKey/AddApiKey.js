import React, { Fragment } from 'react';
import { InputField } from '@calderajs/components';

/**
 * Add Mailchimp API Key
 *
 * @param listFieldConfig
 * @param listId
 * @param setList
 * @param instanceId
 * @return {*}
 * @constructor
 */
export const AddApiKey = ({
	onChange,
	instanceId,
	apiKey,
	onSaveApiKey,
	label,
}) => {
	const field = {
		fieldType: 'text',
		value: apiKey,
		label,
		fieldId: 'caldera-mc-api-key',
		required: true,
	};
	return (
		<Fragment>
			<InputField
				{...field}
				onChange={newValue => {
					onChange(newValue);
				}}
				instanceId={`caldera-mc-select-${instanceId}`}
			/>
			<button
				onClick={onSaveApiKey}
				id={`${instanceId}-mc-add-api-key`}
				title={'Save API Key'}
			>
				Save API Key
			</button>
		</Fragment>
	);
};

AddApiKey.defaultProps = {
	label: 'New API Key',
	apiKey: '',
};
