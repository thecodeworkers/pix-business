import React, { FC, useState } from 'react';
import './styles.scss';
import { RouteComponentProps, Link } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import { DownArrow, Check, XMark } from '../../../../assets/img';

const Confirmation: FC<RouteComponentProps> = () => {
	const [Counter, setCounter] = useState([
		{
			name: 'CounterParty 1',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 300,
			realName: 'El Perro',
		},
		{
			name: 'CounterParty 2',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 700,
			realName: 'El Perro',
		},
		{
			name: 'CounterParty 3',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 900,
			realName: 'El Perro',
		},
	]);

	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Fee: 10000,
		Total: 80000,
	};

	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		value: '10,000',
		total: '10,000',
	};

	return (
		<div className='bodyMultiConfirmation'>
			<div className='accountConfirmationSide'>
				<div className='multiFormConfirmationContainer'>
					<div className='details'>
						<p>Transaction Details</p>
					</div>
					<p>Destination</p>
					<div className='multiForm'>
						<div className='insertedList'>
							{Counter.map((value, index) => (
								<div className='receiver' key={index}>
									<p className='nameReceiver'>{value.name}</p>
									<p className='walletReceiver'>{value.wallet}</p>
									<p className='realReceiver'>{value.realName}</p>
								</div>
							))}
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className='inputConfirmationSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} multi={true} array={Counter} />
				<div className='buttonConfirmationContent'>
					<button className='buttonCancel'>Cancel</button>
					<Link to='/transaction-completed'>
						<button className='buttonSend'>Send</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Confirmation;
