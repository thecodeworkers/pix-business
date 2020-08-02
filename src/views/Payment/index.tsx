import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Tabs, Balance } from '../../components';
import { Pixel } from '../../assets/img';
import './styles.scss';
import Receive from './Receive';
import Multisend from './Multisend';
import Send from './Send';
import ConfirmSend from './Send';
import Transfer from './Transfer';
import TransferDetails from './Transfer/Details';
import TransactionCompleted from './Finished';

const Payment: FC<RouteComponentProps> = ({
	location,
	navigate = (nav: any) => {},
}) => {
	useEffect(() => {
		navigate('transfer');
	}, []);

	const tabs = {
		Transfer: { route: 'transfer' },
		Send: { route: 'send' },
		Receive: { route: 'receive' },
		'Multi Send': { route: 'multisend' },
	};

	const colors: any = [
		{ class: '_one1' },
		{ class: '_five1' },
		{ class: '_two1' },
		{ class: '_six1' },
		{ class: '_five1' },
		{ class: '_four1' },
		{ class: '_three1' },
		{ class: '_seven1' },
	];

	return (
		<div className='paymentContainer'>
			<div className='_paymentContent'>
				<div className='_activityLabel'> 
						<p>Payments</p>
						<span> <Pixel width={'30'} height={'17'} color={'white'} /> </span> 
				</div>
				<div className='paymentBanner'>
					<Tabs path={location?.pathname.split('/')[2]} tabs={tabs} />
					<Balance />
				</div>
				<div className='_lineWidth'>
					{colors.map((res: any, index: any) => (
						<div key={index} className={res.class}></div>
					))}
				</div>
				<Router>
					<Transfer path='transfer/*' />
					<Receive path='receive/*' />
					<Multisend path='multisend/*' />
					<Send path='send/*' />
					<ConfirmSend path='confirm-send/*' />
					<TransactionCompleted path='transaction-completed/*' />
				</Router>
			</div>
		</div>
	);
};

export default Payment;
