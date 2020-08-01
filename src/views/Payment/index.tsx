import React, { FC } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Tabs, Balance } from '../../components';
import './styles.scss';
import Receive from './Receive';

const Payment: FC<RouteComponentProps> = ({
	location,
	navigate,
	uri,
	path,
}) => {
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
				<Tabs location={location} navigate={navigate} tabs={tabs} />
				<Balance />
			</div>
			<div className='_lineWidth'>
				{colors.map((res: any, index: any) => (
					<div key={index} className={res.class}></div>
				))}
			</div>
			<Router>
				<Receive path='/receive' default />
			</Router>
		</div>
	);
};

export default Payment;
