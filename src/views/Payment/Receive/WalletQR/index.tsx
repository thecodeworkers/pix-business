import React, { FC, useEffect, useState } from 'react';
import './styles.scss';
import { CodeQR } from '../../../../components';
import AccountCard from '../../../../components/AccountCard';
import {
	DownArrow,
	Copy,
	BoxCheckedGray,
	BoxCheckedGreen,
} from '../../../../assets/img';
import { StateProps, Props } from './interface';
import { bindActionCreators } from 'redux';
import { getWallets } from '../../../../store/actions';
import { connect } from 'react-redux';
const WalletQR: FC<Props> = ({ wallet, action, navigate = () => {} }) => {
	useEffect(() => {
		if (!wallet) action.getWallets();
	}, [action]);

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

	const [selection, setSelection] = useState(false);

	const getWallets = () => {
		setSelection(!selection);
	};

	return (
		<div className='bodyWallet'>
			<div className='accountSide'>
				<div className='toAccount'>
					<div className='to'>
						<p>To</p>
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
				<div className='QRWallet'>
					<div className='copyWallet'>
						<p>{mainWallet.desc}</p>
						<div className='copy'>
							<Copy />
						</div>
					</div>
				</div>
			</div>
			<div className='inputSide'>
				<CodeQR wallet={mainWallet.desc} />
				<div className='buttonContent'>
					<button className='buttonSend' onClick={() => navigate('/dashboard')}>
						Done
					</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(WalletQR);
