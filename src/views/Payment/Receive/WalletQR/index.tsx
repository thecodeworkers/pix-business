import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { InputValue, Summary } from '../../../../components';

const WalletQR: FC<RouteComponentProps> = () => {
	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Amount: 12000,
		Fee: 10000,
		Total: 80000,
	};

	return (
		<div className='bodyWallet'>
			<div className='accountSide'></div>
			<div className='inputSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} />
			</div>
		</div>
	);
};

export default WalletQR;
