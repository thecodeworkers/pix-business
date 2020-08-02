import React, { FC, useState } from 'react';
import './styles.scss';
import { RouteComponentProps } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import { DownArrow, Check, XMark } from '../../../../assets/img';
import { bindActionCreators } from 'redux';
import { getWallets } from '../../../../store/actions';
import { connect } from 'react-redux';
import { StateProps } from './interface';

const Make: FC<RouteComponentProps> = () => {
	const [Counter, setCounter] = useState([
		{
			name: 'CounterParty 1',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 300,
		},
		{
			name: 'CounterParty 2',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 700,
		},
		{
			name: 'CounterParty 3',
			wallet: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
			amount: 900,
		},
	]);

	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Fee: 10000,
		Total: 80000,
	};

	const data = {
		title: 'Checking account',
		desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
		value: '10,000',
		total: '10,000',
	};

	return (
		<div className='bodyMultiMake'>
			<div className='accountMakeSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>From</p>
						<div className='accountButton'>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					<AccountCard data={data} width='85%' decorator={false} />
				</div>
				<div className='multiFormContainer'>
					<div className='multiForm'>
						<p>To</p>
						<div className='insertForm'>
							<input
								type='text'
								className='addressInput'
								placeholder='address'
							/>
							<input type='text' className='amountInput' placeholder='Amount' />
							<div className='checkBox'>
								<Check />
							</div>
						</div>
						<div className='insertedList'>
							{Counter.map((value, index) => (
								<div className='receiver' key={index}>
									<p className='nameReceiver'>{value.name}</p>
									<p className='walletReceiver'>{value.wallet}</p>
									<input
										type='text'
										value={value.amount}
										placeholder='Amount'
									/>
									<div className='deleteBox'>
										<XMark />
									</div>
									<div className='plusBox'>+</div>
								</div>
							))}
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className='inputMakeSide'>
				<InputValue defaulValue={0} returnValue={getValue} />
				<Summary values={values} multi={true} array={Counter} />
				<div className='buttonMakeContent'>
					<button className='buttonCancel'>Cancel</button>
					<button className='buttonSend'>Send</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ wallet }: StateProps): StateProps => ({ wallet });

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		getWallets,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default Make;
