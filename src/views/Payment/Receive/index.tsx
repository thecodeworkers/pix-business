import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { Commerce } from '../../../assets/img';
import { IconTabs } from '../../../components';

const Receive: FC<RouteComponentProps> = () => {
	const iconTabs = {
		'Wallet or QR Code': {
			route: 'transfer',
			description: 'Receive funds to other USDC address ',
			icon: 'QR',
		},
		'Bank Account': {
			route: 'send',
			description: 'Receive funds to your bank account in the US',
			icon: <Commerce />,
		},
		'Credit Card': {
			route: 'receive',
			description: 'Buy USDC with your credit card',
			icon: 'CARD',
		},
	};

	return (
		<div>
			<IconTabs tabs={iconTabs} />
		</div>
	);
};

export default Receive;
