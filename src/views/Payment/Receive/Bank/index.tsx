import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import { DownArrow, Copy } from '../../../../assets/img';

const Bank: FC<RouteComponentProps> = () => {
	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Amount: 12000,
		Fee: 10000,
		Total: 80000,
	};

	const data2 = {
		title: 'Chase account',
		desc: '*********************1234',
	};

	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		value: '10,000',
		total: '10,000',
	};

	const wallet = '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed';

	return (
		<div className='bodyBank'>
			<div className='accountBankSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>From</p>
						<div className='accountButton'>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					<AccountCard data={data2} width='85%' decorator={false} />
				</div>
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
			</div>
			<div className='bankSide'>
				<div className='bankData'>
					<div className='bankRow'>
						<p>Recipient Name</p>
						<p>The PIX .IO LLC</p>
					</div>
					<div className='bankRow'>
						<p>Branch Address</p>
						<p>80 SW 8th St, Suite 100, Miami, FL, 33130</p>
					</div>
					<div className='bankRow'>
						<p>Checking Account</p>
						<p> 609501090</p>
					</div>
					<div className='bankRow'>
						<p>Routing Number</p>
						<p>021000021</p>
					</div>
					<div className='bankRow'>
						<p>Bank Name</p>
						<p>Chase</p>
					</div>
					<div className='bankLine'></div>
					<div className='bankNote'>
						<p>Bank Reference</p>
						<p>77789997432</p>
					</div>
					<div className='bankNote'>
						<p>Wire Fee</p>
						<p>25$</p>
					</div>
				</div>
			</div>
			<div className='inputBankSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} />
				<div className='buttonBankContent'>
					<button className='buttonCancel'>Cancel</button>
					<button className='buttonSend'>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Bank;
