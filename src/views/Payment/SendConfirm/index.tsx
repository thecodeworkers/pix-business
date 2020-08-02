import React, { FC } from 'react';
import {
	Tabs,
	Balance,
	Header,
	DestinationAccount,
	InputValue,
	PinCard,
	Summary,
} from '../../../components';
import './styles.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StateProps, Props } from './interface';
import { updateFinished } from '../../../store/actions';
import { actionChannel } from 'redux-saga/effects';

const ConfirmSend: FC<Props> = ({
	location,
	navigate = (nav: any) => {},
	sendData,
	action,
	finished,
}) => {
	return (
		<div className='sendConfirmContainer'>
			<div className='_transactionDetail'> Transaction Details</div>

			<p style={{ marginTop: '0.5rem' }}>Destination</p>
			<div className='_destinationRow'>
				<div style={{ width: '40%' }}>
					<DestinationAccount wallet={sendData.wallet.address} />
				</div>

				<div style={{ width: '55%' }}>
					<InputValue
						returnValue={null}
						defaulValue={sendData.values.Amount}
						disables={true}
					/>
				</div>
			</div>

			<p>Enter your 2 step verification code</p>
			<div className='_destinationTwoRow'>
				<div style={{ width: '40%', marginTop: '20px' }}>
					<PinCard />
				</div>

				<div style={{ width: '55%' }}>
					<Summary values={sendData.values} />
				</div>
			</div>

			<div className='_buttonsDivContainer'>
				<div className='_btnsEvenly'>
					<button
						className='_cancelConfirmBtn'
						onClick={() => navigate('/payments/send')}
					>
						Cancel
					</button>

					<button
						className='_sendConfirmBtn'
						onClick={() => {
							navigate('/payments/transaction-completed');
							action.updateFinished({
								to: sendData.wallet.address,
								amount: sendData.values.Amount,
								data: sendData.values,
							});
						}}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ finished, sendData }: StateProps): StateProps => ({
	finished,
	sendData,
});

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		updateFinished,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSend);
