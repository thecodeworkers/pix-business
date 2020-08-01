import React, { FC } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import { DownArrow, Copy } from '../../../../assets/img';

const CreditCard: FC<RouteComponentProps> = () => {
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
		<div className='bodyCredit'>
			<div className='accountCreditSide'>
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
				<div className='creditCard'>
					<div className='creditContent'>
						<div className='creditInputs'>
							<label>
								Card Number
								<input type='text' placeholder='**************************' />
							</label>
							<label>
								Expire Date
								<input type='text' placeholder='**/**/**' />
							</label>
						</div>
						<div className='creditInputs'>
							<label>
								Cardholder Name
								<input type='text' />
							</label>
							<label>
								CVV
								<input type='text' />
							</label>
						</div>
						<div className='creditLonelyInput'>
							<label>
								Zip Code
								<input type='text' />
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className='inputCreditSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} />
				<div className='buttonCreditContent'>
					<button className='buttonCancel'>Cancel</button>
					<button className='buttonSend'>Send</button>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
