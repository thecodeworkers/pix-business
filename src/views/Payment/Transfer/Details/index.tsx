import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { InputValue, Summary, AccountCard } from '../../../../components';
import './styles.scss';

const TransferDetails: FC<RouteComponentProps> = ({ navigate = () => {} }) => {
	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		balances: [],
		value: '10,000',
		total: '10,000',
	};

	const values = {
		Amount: 0,
		Fee: 0,
		Total: 0,
	};

	return (
		<div className='bodyTransfer'>
			<div className='accountTransferSide'>
				<div className='details'>
					<p>Transaction Details</p>
				</div>
				<div className='toAccount'>
					<div className='to'>
						<p>To</p>
					</div>
					<AccountCard data={data} width='85%' decorator={false} />
				</div>
			</div>

			<div className='inputTransferSide'>
				<InputValue defaulValue={0} returnValue={null} disables={true} />
				<Summary values={values} />
				<div className='buttonTransferContent'>
					<button
						className='buttonCancel'
						onClick={() => navigate('/payments/transfer')}
					>
						Cancel
					</button>
					<button
						className='buttonSend'
						onClick={() => navigate('/payments/transaction-completed')}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default TransferDetails;
