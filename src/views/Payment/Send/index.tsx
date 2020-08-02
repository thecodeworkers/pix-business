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

const Send: FC<Props> = ({ wallet, action, navigate = () => {}, location }) => {
	useEffect(() => {
		navigate('wallet');
		if (!wallet) action.getWallets();
	}, []);

	const [currentTab, setCurrentTab] = useState('wallet');
	const [show, setShow] = useState(false);
	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);
	const [selectionWallet, setSelectionWallet] = useState(false);

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
		<div className='ReceiveContainer'>
			<div onClick={() => ChangeTab()}>
				<IconTabs
					path={location?.pathname.split('/')[3]}
					tabs={iconTabs}
					width='40%'
					height='70px'
				/>
			</div>

			<div className='_inputsRow'>
				<div className='_amountsTabs'>
					<div className='_largeCard'>
						<button className='_cardButton'>Min</button>
						<button className='_cardButton'>Parcial</button>
						<button className='_cardButton'>Max</button>
					</div>
				</div>

				<div style={{ width: '50%' }}>
					<InputValue defaulValue={0} returnValue={changeValue} />
				</div>
			</div>

			<div className='_fromDiv'>
				<p>From</p>

				<div className='_fakeSelect' onClick={getWallets}>
					select
					<DownArrow />
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
			</div>

			<div className='_rowsCard'>
				<div style={{ width: '45%', marginTop: '20px' }}>
					<AccountCard data={mainWallet} width='95%' decorator={false} />
				</div>

				<div style={{ width: '50%' }}>
					<Summary values={values} />
				</div>
			</div>

			<div className='_toContainer'>
				<p>To</p>
				<div className='_actBtn'>
					<AddNew />
					<div style={{ marginLeft: '0.5rem' }}>
						<WhiteListButton />
					</div>
				</div>
			</div>

			<div className='_lastRow'>
				<div className='_pasteStyles'>
					{currentTab == 'wallet' ? (
						<PasteWallet returnValue={walletInput} />
					) : (
						<BankCard />
					)}
				</div>

				<div>
					<button className='_cancelBtn' onClick={() => showModal()}>
						{' '}
						Cancel
					</button>

					<Link to='/confirm-send'>
						<button className='_sendBtn'> Send</button>
					</Link>
				</div>

				<Tool show={show} callback={() => showModal()}>
					{' '}
				</Tool>
			</div>
		</div>
	);
};

const mapStateToProps = ({ wallet }: StateProps): StateProps => ({
	wallet,
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
