import React, { FC, useState, useEffect } from 'react';
import './styles.scss';
import AccountCard from '../../../../components/AccountCard';
import {
	DownArrow,
	BoxCheckedGreen,
	BoxCheckedGray,
} from '../../../../assets/img';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWallets } from '../../../../store/actions';
import { StateProps, Props } from './interface';

const Bank: FC<Props> = ({ wallet, action, bankAccount }) => {
	const [selectionWallet, setSelection] = useState(false);

	useEffect(() => {
		if (!wallet) action.getWallets();
	}, [action]);

	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);

	const [mainBank, setMainBank] = useState(
		bankAccount.results[0]
			? {
					title: bankAccount.results[0].bankName + ' Account',
					address: bankAccount.results[0].checkingAccount,
			  }
			: {}
	);

	const [selectionAccount, setSelectionAccount] = useState(false);

	const getWallets = () => {
		setSelection(!selectionWallet);
	};

	const getAccounts = () => {
		setSelectionAccount(!selectionAccount);
	};

	return (
		<div className='bodyBank'>
			<div className='accountBankSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>From</p>
						<div
							className={
								selectionAccount ? 'accountButton selected' : 'accountButton'
							}
							onClick={getAccounts}
						>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					{selectionAccount ? (
						<div className='cardSelection'>
							{bankAccount.results.map((value: any, key: any) => {
								let values = {
									title: value.bankName + ' Account',
									address: value.checkingAccount,
								};

								let Check =
									mainBank.address === values.address
										? BoxCheckedGreen
										: BoxCheckedGray;

								return (
									<div className='selectCard' key={key}>
										<div
											className='checkedVal'
											onClick={() => setMainBank(values)}
										>
											<Check />
										</div>
										<AccountCard data={values} width='85%' decorator={false} />
									</div>
								);
							})}
						</div>
					) : null}
					<AccountCard
						data={mainBank}
						banking={true}
						width='85%'
						decorator={false}
					/>
				</div>
				<div className='toAccount'>
					<div className='to'>
						<p>To</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bank);
