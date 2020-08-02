import React, { FC, useEffect, useState } from 'react';
import { InputValue } from '../../../components';
import {
	Commerce,
	BankBlue,
	QrBlue,
	QrWhite,
	BoxCheckedGreen,
	BoxCheckedGray,
} from '../../../assets/img';
import {
	IconTabs,
	Summary,
	AddNew,
	WhiteListButton,
	PasteWallet,
	Tool,
	DynamicTable,
} from '../../../components';
import { getCounterparties } from '../../../store/actions';
import { DownArrow, Close } from '../../../assets/img';
import AccountCard from '../../../components/AccountCard';
import './styles.scss';
import { StateProps, Props } from './interface';
import { getWallets, updateSend } from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Send: FC<Props> = ({
	bankAccount,
	counterparty,
	wallet,
	action,
	sendData,
	navigate = () => {},
	location,
}) => {
	useEffect(() => {
		navigate('wallet');
		if (!wallet) action.getWallets();
	}, []);

	const [currentTab, setCurrentTab] = useState('wallet');
	const [show, setShow] = useState(false);
	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);
	const [selectionWallet, setSelectionWallet] = useState(false);
	const [selectionBank, setSelectionBank] = useState(false);
	const [mainBank, setMainBank] = useState(
		bankAccount.bankAccounts[0]
			? {
					title: bankAccount.bankAccounts[0].bankName + ' Account',
					address: bankAccount.bankAccounts[0].checkingAccount,
			  }
			: {}
	);

	const [sendWallet, SetSendWallet] = useState('');
	const dataTable = {
		keys: ['hidden', 'counterparty', 'email', 'address'],
		records: counterparty.counterparties,
	};
	const [values, setValues] = useState({
		Amount: 0,
		Fee: 0,
		Total: 0,
	});

	const iconTabs = {
		'Wallet or QR Code': {
			route: 'wallet',
			description: 'Receive funds to other USDC address ',
			icon: <QrBlue />,
			iconSelected: <QrWhite />,
		},
		'Bank Account': {
			route: 'bank',
			description: 'Receive funds to your bank account in the US',
			icon: <BankBlue />,
			iconSelected: <Commerce />,
		},
	};

	const ChangeTab = () => {
		currentTab == 'wallet' ? setCurrentTab('bank') : setCurrentTab('wallet');
	};

	const getWallets = () => {
		setSelectionWallet(!selectionWallet);
	};

	const getBanks = () => {
		setSelectionBank(!selectionBank);
	};

	const walletInput = (value: any) => {
		SetSendWallet(value);
	};

	const confirmSend = () => {
		sendData.wallet = mainWallet;
		sendData.wallet.address = sendWallet;
		sendData.values = values;

		action.updateSend(sendData);
	};

	const changeValue = (value: any) => {
		let newValue = {
			Amount: value,
			Fee: 1,
			Total: 1 + Number(value),
		};

		setValues(newValue);
	};

	const showModal = () => {
		!show ? setShow(true) : setShow(false);
	};

	return (
		<div>
			<div onClick={() => ChangeTab()}>
				<IconTabs
					path={location?.pathname.split('/')[3]}
					tabs={iconTabs}
					width='40%'
					height='70px'
				/>
			</div>
			<div className='bodySend'>
				<div className='accountSendSide'>
					<div className='_amountsTabs'>
						<div className='_largeCard'>
							<button className='_cardButton'>Min</button>
							<button className='_cardButton'>Parcial</button>
							<button className='_cardButton'>Max</button>
						</div>
					</div>
					<div className='toAccount'>
						<div className='to'>
							<p>From</p>
							<div
								className={
									selectionWallet ? 'accountButton selected' : 'accountButton'
								}
								onClick={getWallets}
							>
								<p>Account</p>
								<DownArrow />
							</div>
						</div>
						{selectionWallet ? (
							<div className='cardSelection'>
								{wallet.wallets.map((value: any, key: any) => {
									let Check =
										mainWallet.address === value.address
											? BoxCheckedGreen
											: BoxCheckedGray;

									return (
										<div className='selectCard' key={key}>
											<div
												className='checkedVal'
												onClick={() => {
													setMainWallet(value);

													setSelectionWallet(false);
												}}
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
					<div className='toAccount'>
						<div className='to'>
							<p>To</p>
							{currentTab == 'wallet' ? (
								<div className='buttonContainer'>
									<div style={{ marginLeft: '0.5rem' }}>
										<AddNew />
									</div>
									<div style={{ marginLeft: '0.5rem' }} onClick={showModal}>
										<WhiteListButton />
									</div>
								</div>
							) : (
								<div
									className={
										selectionBank ? 'accountButton selected' : 'accountButton'
									}
									onClick={getBanks}
								>
									<p>Account</p>
									<DownArrow />
								</div>
							)}
						</div>
						{selectionBank ? (
							<div className='cardSelection'>
								{bankAccount.bankAccounts.map((value: any, key: any) => {
									value = {
										title: value.bankName + ' Account',
										address: value.checkingAccount,
									};
									let Check =
										mainBank.address === value.address
											? BoxCheckedGreen
											: BoxCheckedGray;

									return (
										<div className='selectCard' key={key}>
											<div
												className='checkedVal'
												onClick={() => {
													setMainBank(value);

													setSelectionBank(false);
												}}
											>
												<Check />
											</div>
											<AccountCard
												data={value}
												banking={true}
												width='85%'
												decorator={false}
											/>
										</div>
									);
								})}
							</div>
						) : null}
						{currentTab == 'wallet' ? (
							<PasteWallet returnValue={walletInput} />
						) : (
							<AccountCard
								data={mainBank}
								width='85%'
								banking={true}
								decorator={false}
							/>
						)}
					</div>
				</div>

				<div className='inputSendSide'>
					<InputValue defaulValue={0} returnValue={changeValue} />
					<Summary values={values} />
					<div className='buttonSendContent'>
						<button
							className='buttonCancel'
							onClick={() => navigate('/dashboard')}
						>
							Cancel
						</button>
						<button
							className='buttonSend'
							onClick={() => {
								navigate('/payments/confirm-send');
								confirmSend();
							}}
						>
							Send
						</button>
					</div>
				</div>
			</div>
			<div className={show ? '_blur' : '_blurNone'}>
				<div className={show ? '_showTool' : '_noneTool'}>
					<div className='_closeTools' onClick={() => showModal()}>
						<Close />
					</div>
					<div className='_DynamicTableLayOut'>
						<p style={{ marginBottom: '20px', textAlign: 'left' }}>Whitelist</p>
						<div className='_whilistStyles'>
							<DynamicTable keys={dataTable.keys} records={dataTable.records} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
{
}
const mapStateToProps = ({
	wallet,
	bankAccount,
	counterparty,
	sendData,
}: StateProps): StateProps => ({
	wallet,
	bankAccount,
	counterparty,
	sendData,
});

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		getCounterparties,
		updateSend,
		getWallets,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
