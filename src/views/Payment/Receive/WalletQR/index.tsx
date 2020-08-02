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

	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);

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
				<div className='QRWallet'>
					<div className='copyWallet'>
						<p>{mainWallet.address}</p>
						<div className='copy'>
							<Copy />
						</div>
					</div>
				</div>
			</div>
			<div className='inputSide'>
				<CodeQR wallet={mainWallet.address} />
				<div className='buttonContent'>
					<button
						className='buttonSend'
						onClick={() => navigate('/dashboard')}
					>
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
