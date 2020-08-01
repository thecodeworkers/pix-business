import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import './styles.scss';
import { Notification, User } from '../../assets/img';
import AccountForm from '../../components/AccountForm';

const Profile: FC<RouteComponentProps> = (props: any) => {
	const [form, setForm] = useState(false);

	const formData = [
		{ name: 'branchAddress', type: 'text', label: 'Branch Address' },
		{ name: 'checkingAccount', type: 'text', label: 'Checking Account' },
		{ name: 'routingNumber', type: 'text', label: 'Routing Number' },
		{ name: 'bankName', type: 'text', label: 'Bank Name' },
	];

	const formValues = {
		branchAddress: '',
		checkingAccount: '',
		routingNumber: '',
		bankName: '',
	};

	const getData = (values: any, validat: any) => {
		console.log(values);
		console.log(validat);
	};
	return (
		<div>
			<div className='_actionsProfile _subcontainer'>
				<div className='_icon'>
					<Notification color='#c9c9c9' width='22' height='27' />
				</div>
				<div className='selectedIcon'>
					<div className='_icon'>
						<User bcolor='none' color='#c9c9c9' width='22' height='27' />
					</div>
					<p>Profile</p>
				</div>
			</div>
			{!form ? (
				<div className='ProfileButtons'>
					<div
						className='addButton'
						onClick={() => {
							setForm(true);
						}}
					>
						<p>+</p>
						<p>Add New Account</p>
					</div>
				</div>
			) : (
				<AccountForm init={formValues} data={formData} getData={getData} />
			)}
		</div>
	);
};

export default Profile;
