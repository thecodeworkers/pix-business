import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { InputValue, Summary, AccountCard } from '../../../../components';
import './styles.scss';

const TransferDetails: FC<RouteComponentProps> = () => {
	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		balances: [],
		value: '10,000',
		total: '10,000',
	};

	const values = {
		Amount: 12000,
		Fee: 10000,
		Total: 80000,
	};

	return (
		<div className='_mainContainer'>
			<div className='_firstColumn'>
				<button className='_transButton'>Transaction details</button>
				<div className='_cardContainer'>
					<p>Destination</p>
					<div className='_cards'>
						<AccountCard data={data} width='95%' decorator={false} />
					</div>
				</div>
			</div>

			<div className='_secondColumn _topMargin'>
				<InputValue defaulValue={0} returnValue={null} />
				<Summary values={values} />
				<div className='_buttonsContainer'>
					<button className='_cancelBtn'>Cancel</button>

					<Link to='/transaction-completed'>
						<button className='_sendBtn'>Done</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TransferDetails;
