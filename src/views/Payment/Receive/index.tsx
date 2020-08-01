import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps, Router } from '@reach/router';
import {
	Commerce,
	BankBlue,
	QrBlue,
	QrWhite,
	CreditCardBlue,
	CreditCardWhite,
} from '../../../assets/img';
import { IconTabs } from '../../../components';
import WalletQR from './WalletQR';

const Receive: FC<RouteComponentProps> = () => {
	const iconTabs = {
		'Wallet or QR Code': {
			route: 'transfer',
			description: 'Receive funds to other USDC address ',
			icon: <QrBlue />,
			iconSelected: <QrWhite />,
		},
		'Bank Account': {
			route: 'send',
			description: 'Receive funds to your bank account in the US',
			icon: <BankBlue />,
			iconSelected: <Commerce />,
		},
		'Credit Card': {
			route: 'receive',
			description: 'Buy USDC with your credit card',
			icon: <CreditCardBlue />,
			iconSelected: <CreditCardWhite />,
		},
	};

	return (
		<div className="ReceiveContainer">
			<IconTabs tabs={iconTabs} width='25%' height='70px' />
			<Router>
				<WalletQR path='wallet' default />
			</Router>
		</div>
	);
};

export default Receive;
