import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router, navigate } from '@reach/router';
import { Tabs, Balance } from '../../components';
import './styles.scss';
import Receive from './Receive';
import Send from './Send';

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
				<Receive path='receive/*' />
				<Send path='send/*' />
			</Router>
		</div>
	);
};

export default Payment;
