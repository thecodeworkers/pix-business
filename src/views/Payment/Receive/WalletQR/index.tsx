import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import { DownArrow, Copy } from '../../../../assets/img';

const WalletQR: FC<RouteComponentProps> = () => {
	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Amount: 12000,
		Fee: 10000,
		Total: 80000,
	};

	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		value: '10,000',
		total: '10,000',
	};

	const wallet = '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed';

	return (
		<div className='bodyWallet'>
			<div className='accountSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>To</p>
						<div className='accountButton'>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					<AccountCard data={data} width='85%' decorator={false} />
				</div>
				<div className='QRWallet'>
					<CodeQR wallet='wallet' />
					<div className='copyWallet'>
						<p>{wallet}</p>
						<div className="copy">
							<Copy />
						</div>
					</div>
				</div>
			</div>
			<div className='inputSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} />
				<div className='buttonContent'>
					<button className='buttonCancel'>Cancel</button>
					<button className='buttonSend'>Send</button>
				</div>
			</div>
		</div>
	);
};

export default WalletQR;
