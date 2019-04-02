import {CalderaForm} from "../CalderaForm";
import getCf2Token from "../Http/handlers/getCf2Token";
import handleFormSubmitCf2 from "../Http/handlers/handleFormSubmitCf2";
import React, {useState, useEffect, Fragment} from 'react';
import { Notice } from '@wordpress/components';

export const CF2Form = (
	{
		apiRootUri,
		formConfig,
		axios,
		_tokens
	}
) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [tokensFetched, setTokensFetched] = useState(false);
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hideForm, setHideForm] = useState(false);
	const [tokens, setTokens] = useState(_tokens || {
		_cf_verify: '',
		_sessionPublicKey: ''
	});
	const [form, setForm] = useState(formConfig);
	const formId = form.ID;
	/**
	 * Get tokens if not passed.
	 */
	useEffect(() => {
		async function getToken() {
			getCf2Token(apiRootUri, formId, axios)
				.then(r => {
					setTokens(r);
					setTokensFetched(true)
				})
		}

		if (tokens._cf_verify && tokens._sessionPublicKey) {
			setTokensFetched(true);
			return;
		}

		getToken();


	}, [tokensFetched]);

	if (hideForm) {
		return (
			<Notice
				isError={false}
				onRemove={() => {
					setHideForm(false);
					setTokensFetched(false);
				}}
			>
				{message}
			</Notice>
		)
	}
	return (
		<Fragment>
			{tokensFetched ?
				<CalderaForm
					form={form}
					fields={form.fields}
					onChange={newValues => {

					}}
					onSubmit={(values, actions) => {
						setIsSubmitting(true);
						actions.setSubmitting(false);
						handleFormSubmitCf2({
							entryValues: values,
							tokens,
							apiRootUri,
							formId,
							axios
						}).then(r => {
							setIsSubmitting(false);
							setHideForm(true);
							setMessage(r.data.message);
							actions.resetForm();
						}).catch(e => {
							setIsSubmitting(false);
							console.log(e);
						})

					}}
				/>
				:
				<div>Loading Spinner</div>

			}
		</Fragment>
	);

}
