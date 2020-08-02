import React, { FC } from 'react';
import { RouteComponentProps, Router, Link } from '@reach/router';
import { InputValue, AccountCard, Summary } from '../../../../components';
import { DownArrow } from '../../../../assets/img';
import TransferDetails from '../Details';
import './styles.scss';

const TransferMain: FC<RouteComponentProps> = (props: any) => {
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
				<div className='_largeCard'>
					<button className='_cardButton'>Min</button>
					<button className='_cardButton'>Parcial</button>
					<button className='_cardButton'>Max</button>
				</div>
				<div className='_cardContainer'>
					<div className='_fromD'>
						<p>From </p>
						<div className='_fakeSelect'>
							select <DownArrow />
						</div>
					</div>
					<div className='_cards'>
						<AccountCard data={data} width='95%' decorator={true} />
						<AccountCard data={data} width='95%' decorator={true} />
						<AccountCard data={data} width='95%' decorator={true} />
					</div>
				</div>
			</div>

			<div className='_secondColumn'>
				<InputValue defaulValue={0} returnValue={null} />
				<Summary values={values} />
				<div className='_buttonsContainer'>
					<button className='_cancelBtn'>Cancel</button>

					<Link to='details'>
						<button className='_sendBtn'>Done</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TransferMain;
