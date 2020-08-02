import React, { FC, useState, useEffect } from 'react';
import './styles.scss';
import { InputValue, Summary, CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import {
	DownArrow,
	Check,
	XMark,
	BoxCheckedGreen,
	BoxCheckedGray,
} from '../../../../assets/img';
import { bindActionCreators } from 'redux';
import { getWallets, updateMultiSend } from '../../../../store/actions';
import { connect } from 'react-redux';
import { StateProps, Props } from './interface';

const Make: FC<Props> = ({ wallet, action, multiSend }) => {
	useEffect(() => {
		if (!wallet) action.getWallets();
	}, [action]);

	const [sumValue, setSumValue] = useState(0);

	const [selection, setSelection] = useState(false);

	const [mainWallet, setMainWallet] = useState(
		wallet.wallets[0]
			? {
					title: !wallet.wallets[0].saving
						? 'Checking Account'
						: 'Saving Account',
					desc: wallet.wallets[0].address,
					value: wallet.wallets[0].balances.length
						? wallet.wallets[0].balances[0]
						: 0,
					total: wallet.wallets[0].balances.length
						? wallet.wallets[0].balances[0]
						: 0,
			  }
			: {}
	);

	const [form, setForm] = useState({
		wallet: '',
		amount: '',
	});

	const getValue = (value: any) => {
		console.log(value);
	};

	const values = {
		Fee: 10000,
		Total: 80000,
	};

	const deleteArray = (index: any) => {
		delete multiSend.result[index];
		action.updateMultiSend(multiSend.result);
	};

	const getWallets = () => {
		setSelection(!selection);
	};

	return (
		<div className='bodyMultiMake'>
			<div className='accountMakeSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>From</p>
						<div
							className={selection ? 'accountButton selected' : 'accountButton'}
							onClick={getWallets}
						>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					{selection ? (
						<div className='cardSelection'>
							{wallet.wallets.map((value, key) => {
								let values = {
									title: !value.saving ? 'Checking Account' : 'Saving Account',
									desc: value.address,
									value: value.balances.length ? value.balances[0] : 0,
									total: value.balances.length ? value.balances[0] : 0,
								};

								let Check =
									mainWallet.desc === values.desc
										? BoxCheckedGreen
										: BoxCheckedGray;

								return (
									<div className='selectCard' key={key}>
										<div
											className='checkedVal'
											onClick={() => setMainWallet(values)}
										>
											<Check />
										</div>
										<AccountCard data={values} width='85%' decorator={false} />
									</div>
								);
							})}
						</div>
					) : null}
					<AccountCard data={mainWallet} width='85%' decorator={false} />
				</div>
				<div className='multiFormContainer'>
					<div className='multiForm'>
						<p>To</p>
						<div className='insertForm'>
							<input
								type='text'
								className='addressInput'
								placeholder='address'
								value={form.wallet}
								onChange={(event) => {
									setForm({ ...form, ...{ wallet: event.target.value } });
								}}
							/>
							<input
								type='text'
								className='amountInput'
								placeholder='Amount'
								value={form.amount}
								onChange={(event) => {
									setForm({ ...form, ...{ amount: event.target.value } });
								}}
							/>
							<div
								className='checkBox'
								onClick={() => {
									let counter = multiSend.result.length;
									counter++;
									let newForm: any = {};
									newForm['name'] = 'counterparty ' + counter;
									multiSend.result.push({ ...form, ...newForm });
									let sum = multiSend.result.reduce((prex: any, next: any) => {
										return Number(prex.amount) + Number(next.amount);
									});
									setSumValue(sum);
									action.updateMultiSend(multiSend.result);
								}}
							>
								<Check />
							</div>
						</div>
						<div className='insertedList'>
							{multiSend.result.map((value: any, index: any) => (
								<div className='receiver' key={index}>
									<p className='nameReceiver'>{value.name}</p>
									<p className='walletReceiver'>{value.wallet}</p>
									<input
										disabled={true}
										type='text'
										value={value.amount}
										placeholder='Amount'
									/>
									<div
										className='deleteBox'
										onClick={() => {
											deleteArray(index);
										}}
									>
										<XMark />
									</div>
									<div className='plusBox'>+</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='inputMakeSide'>
				<InputValue defaulValue={sumValue} returnValue={getValue} />
				<Summary values={values} multi={true} array={multiSend.result} />
				<div className='buttonMakeContent'>
					<button className='buttonCancel'>Cancel</button>
					<button className='buttonSend'>Send</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ wallet, multiSend }: StateProps): StateProps => ({
	wallet,
	multiSend,
});

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		getWallets,
		updateMultiSend,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Make);
