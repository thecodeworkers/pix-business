import React, { FC } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Tabs } from '../../components';
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
		Multisend: { route: 'multisend' },
	};

	console.log(uri);
	console.log(path);

	return (
		<div>
			<div className='paymentBanner'>
				<Tabs location={location} navigate={navigate} tabs={tabs} />
				<div className='totalAmount'>
					<h3>Total</h3>
					<h1>$300.000</h1>
				</div>
			</div>
			<Router>
				<Receive path='/receive' default />
			</Router>
		</div>
	);
};

export default Payment;
