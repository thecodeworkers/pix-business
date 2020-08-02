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

const Make: FC<Props> = ({
	wallet,
	action,
	multiSend,
	navigate = () => {},
}) => {
	useEffect(() => {
		if (!wallet) action.getWallets();

		action.updateMultiSend([]);
	}, [action]);

	const [sumValue, setSumValue] = useState(0);

	const [selection, setSelection] = useState(false);

	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);

	const [form, setForm] = useState({
		address: '',
		amount: '',
	});

	const getValue = (value: any) => {
		console.log(value);
	};

	const [values, setValues] = useState({
		Fee: 0,
		Total: 0,
	});

	const deleteArray = (index: any) => {
		multiSend.result.splice(index, 1);

		let sum = multiSend.result.reduce((prex: any, next: any) => {
			return (
				Number(typeof prex === 'object' ? prex.amount : prex) +
				Number(next.amount)
			);
		});
		sum = typeof sum === 'object' ? sum.amount : sum;
		let newValues = {
			Fee: multiSend.result.length,
			Total: sum + multiSend.result.length,
		};

		setValues(newValues);
		setSumValue(sum);

		action.updateMultiSend(multiSend.result);
	};

	const enableInput = (index: any) => {
		multiSend.result[index].disabledInput = !multiSend.result[index]
			.disabledInput;
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
								let Check =
									mainWallet.address === value.address
										? BoxCheckedGreen
										: BoxCheckedGray;

								return (
									<div className='selectCard' key={key}>
										<div
											className='checkedVal'
											onClick={() => setMainWallet(value)}
										>
											<Check />
										</div>
										<AccountCard data={value} width='85%' decorator={false} />
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
								value={form.address}
								onChange={(event) => {
									setForm({ ...form, ...{ address: event.target.value } });
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
									newForm['disabledInput'] = true;

									console.log(multiSend.result);
									multiSend.result.push({ ...form, ...newForm });
									let sum = multiSend.result.reduce((prex: any, next: any) => {
										return (
											Number(typeof prex === 'object' ? prex.amount : prex) +
											Number(next.amount)
										);
									});
									sum = typeof sum === 'object' ? sum.amount : sum;
									let newValues = {
										Fee: multiSend.result.length,
										Total: sum + multiSend.result.length,
									};

									setValues(newValues);
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
									<p className='walletReceiver'>{value.address}</p>
									<input
										disabled={value.disabledInput}
										type='text'
										value={value.amount}
										onChange={(event) => {
											value.amount = event.target.value;
											multiSend.result[index] = value;
											let sum = multiSend.result.reduce(
												(prex: any, next: any) => {
													return (
														Number(
															typeof prex === 'object' ? prex.amount : prex
														) + Number(next.amount)
													);
												}
											);
											sum = typeof sum === 'object' ? sum.amount : sum;
											let newValues = {
												Fee: multiSend.result.length,
												Total: sum + multiSend.result.length,
											};

											setValues(newValues);
											setSumValue(sum);
											action.updateMultiSend(multiSend.result);
										}}
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
									<div
										className='plusBox'
										onClick={() => {
											enableInput(index);
										}}
									>
										+
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='inputMakeSide'>
				<InputValue
					defaulValue={sumValue}
					returnValue={getValue}
					disables={true}
				/>
				<Summary values={values} multi={true} array={multiSend.result} />
				<div className='buttonMakeContent'>
					<button className='buttonCancel'>Cancel</button>
					{/* <Link to='confirmation'> */}
					<button
						className='buttonSend'
						onClick={() => navigate('confirmation')}
					>
						Send
					</button>
					{/* </Link> */}
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
