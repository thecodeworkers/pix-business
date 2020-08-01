import React, { FC, useEffect } from 'react';
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

const Receive: FC<RouteComponentProps> = ({
	location,
	navigate = (nav: any) => {},
}) => {
	useEffect(() => {
		navigate('wallet');
	}, []);

	const iconTabs = {
		'Wallet or QR Code': {
			route: 'wallet',
			description: 'Receive funds to other USDC address ',
			icon: <QrBlue />,
			iconSelected: <QrWhite />,
		},
		'Bank Account': {
			route: 'bank',
			description: 'Receive funds to your bank account in the US',
			icon: <BankBlue />,
			iconSelected: <Commerce />,
		},
		'Credit Card': {
			route: 'ccard',
			description: 'Buy USDC with your credit card',
			icon: <CreditCardBlue />,
			iconSelected: <CreditCardWhite />,
		},
	};

	return (
		<div className='ReceiveContainer'>
			<IconTabs
				path={location?.pathname.split('/')[3]}
				tabs={iconTabs}
				width='25%'
				height='70px'
			/>
			<Router>
				<WalletQR path='wallet' default />
			</Router>
		</div>
	);
};

export default Receive;
