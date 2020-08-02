import React, { FC, useEffect, useState } from 'react';
import { Link } from '@reach/router';
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
	BankCard,
	Tool,
} from '../../../components';
import { DownArrow } from '../../../assets/img';
import AccountCard from '../../../components/AccountCard';
import './styles.scss';
import { StateProps, Props } from './interface';
import { getWallets } from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Send: FC<Props> = ({
	bankAccount,
	wallet,
	action,
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
	const [mainBank, setMainBank] = useState(
		bankAccount.results[0]
			? {
					title: bankAccount.results[0].bankName + ' Account',
					address: bankAccount.results[0].checkingAccount,
			  }
			: {}
	);

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

	const walletInput = (value: any) => {
		console.log(value);
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
					<div className='toAccount'>
						<div className='to'>
							<p>To</p>
							<div className='buttonContainer'>
								<div style={{ marginLeft: '0.5rem' }}>
									<AddNew />
								</div>
								<div style={{ marginLeft: '0.5rem' }}>
									<WhiteListButton />
								</div>
							</div>
						</div>
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
							onClick={() => navigate('/payments/transfer/details')}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ wallet, bankAccount }: StateProps): StateProps => ({
	wallet,
	bankAccount,
});

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		getWallets,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
