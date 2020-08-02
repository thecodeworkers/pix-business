import React, { FC, useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { InputValue, AccountCard, Summary } from '../../../../components';
import {
	DownArrow,
	BoxCheckedGreen,
	BoxCheckedGray,
} from '../../../../assets/img';
import './styles.scss';
import { Props, StateProps } from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWallets } from '../../../../store/actions';

const TransferMain: FC<Props> = ({ wallet, action, navigate = () => {} }) => {
	const [selectionWallet, setSelection] = useState(false);
	const [selectionWallet2, setSelectionWallet2] = useState(false);
	const [mainWallet, setMainWallet] = useState(wallet.wallets[0]);
	const [mainWallet2, setMainWallet2] = useState(wallet.wallets[1]);
	const [values, setValues] = useState({
		Amount: 0,
		Fee: 0,
		Total: 0,
	});

	useEffect(() => {
		if (!wallet) action.getWallets();
	}, [action]);

	const changeValue = (value: any) => {
		let newValue = {
			Amount: value,
			Fee: 1,
			Total: 1 + Number(value),
		};

		setValues(newValue);
	};

	const getWallets = () => {
		setSelection(!selectionWallet);
	};

	const getWallets2 = () => {
		setSelectionWallet2(!selectionWallet2);
	};

	return (
		<div className='bodyTransfer'>
			<div className='accountTransferSide'>
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
					<AccountCard
						data={mainWallet}
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
								selectionWallet2 ? 'accountButton selected' : 'accountButton'
							}
							onClick={getWallets2}
						>
							<p>Account</p>
							<DownArrow />
						</div>
					</div>
					{selectionWallet2 ? (
						<div className='cardSelection'>
							{wallet.wallets.map((value: any, key: any) => {
								let Check =
									mainWallet2.address === value.address
										? BoxCheckedGreen
										: BoxCheckedGray;

								return (
									<div className='selectCard' key={key}>
										<div
											className='checkedVal'
											onClick={() => setMainWallet2(value)}
										>
											<Check />
										</div>
										<AccountCard data={value} width='85%' decorator={false} />
									</div>
								);
							})}
						</div>
					) : null}
					<AccountCard data={mainWallet2} width='85%' decorator={false} />
				</div>
			</div>

			<div className='inputTransferSide'>
				<InputValue defaulValue={0} returnValue={changeValue} />
				<Summary values={values} />
				<div className='buttonTransferContent'>
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

export default connect(mapStateToProps, mapDispatchToProps)(TransferMain);
