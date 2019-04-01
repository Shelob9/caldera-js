import React, { useState,useEffect } from 'react';
import {Message} from "@calderawp/components";
import './App.css';
import {CalderaForm} from "@calderawp/forms";
const textField = {
	fieldType: 'text',
	value: '',
	label: 'First Name',
	fieldId: 'firstName',
	description: 'your first name',
	required: true
};

const emailField = {
	fieldType: 'email',
	value: '',
	label: 'Email Field Label',
	fieldId: 'emailFieldId',
	description: 'Email field description',
	required: true,
	attributes: {
		multiple: true
	}
};

const form = {
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1/2',
					columnId: '1aaaaa'
				},
				{
					fields: [textField.fieldId],
					width: '1/4',
					columnId: '1b'
				}
			]
		}
	],
	fields: [
		emailField,
		textField
	],
	conditionals :[

	]
};


const App = () =>  {
    const [message,updateMessage] = useState('Effect has not run yet');

    //For demo, not controlling field values
    const [fieldValues,setFieldValues] = useState({
		[emailField.fieldId]: '',
		[textField.fieldId]: '',

	});

	useEffect(() => {
		updateMessage( 'Effect has run' );
	});

    return (
      <div className="App">
        <header className="App-header">
			<Message

                message={{message}}
                error={false}
            />
		</header>
		  <div>
			  <ul>
				  <li>First Name: {fieldValues[emailField.fieldId]}</li>
				  <li>Email: {fieldValues[textField.fieldId]}</li>
			  </ul>
			<CalderaForm
				form={form}
				fields={form.fields}
				onChange={newValues=> {
					setFieldValues({
						...fieldValues,
						...newValues,
					})
				}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
			/>

        </div>
      </div>
    );

}

export default App;