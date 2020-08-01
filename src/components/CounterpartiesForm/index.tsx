import React from 'react';
import './styles.scss';
import AccountForm from '../../components/AccountForm';

const CounterpartiesForm = (props: any) => {
	const formData = [
		{ name: 'type', type: 'text', label: 'Type' },
		{ name: 'counterparty', type: 'text', label: 'Counterparty' },
		{ name: 'address', type: 'text', label: 'Address' },
		{ name: 'email', type: 'email', label: 'Email' },
		{ name: 'phone', type: 'text', label: 'Phone' },
	];

	const formValues = {
		type: '',
		counterparty: '',
		address: '',
		email: '',
		phone: '',
	};

	const getData = (values: any, validat: any) => {
		console.log(values);
		console.log(validat);
	};

	return <AccountForm init={formValues} data={formData} getData={getData} />;
};

export default CounterpartiesForm;
