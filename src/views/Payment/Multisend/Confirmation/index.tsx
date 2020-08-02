import React, { FC, useState } from 'react';
import './styles.scss';
import { Link, navigate } from '@reach/router';
import { InputValue, Summary, CodeQR } from '../../../../components';
import { Props, StateProps } from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { multiTransfer, updateFinished } from '../../../../store/actions';

const Confirmation: FC<Props> = ({
	action,
	multiSend,
	navigate = () => {},
}) => {
	const getValue = (value: any) => {
		console.log(value);
	};

	const sum = multiSend.result.length
		? multiSend.result.reduce((prex: any, next: any) => {
				return (
					Number(typeof prex === 'object' ? prex.amount : prex) +
					Number(next.amount)
				);
		  })
		: 0;

	const values = {
		Fee: multiSend.result.length,
		Total:
			typeof sum === 'object'
				? sum.amount + multiSend.result.length
				: sum + multiSend.result.length,
	};

	const sendData = () => {
		//if (multiSend.result.length) action.multiTransfer(multiSend.result);
		action.updateFinished({
			to: 'Multiples Address',
			amount: sum,
			data: values,
			dataArray: multiSend.result,
			array: true,
		});
		navigate('/payments/transaction-completed');
	};

	return (
		<div className='bodyMultiConfirmation'>
			<div className='accountConfirmationSide'>
				<div className='multiFormConfirmationContainer'>
					<div className='details'>
						<p>Transaction Details</p>
					</div>
					<p>Destination</p>
					<div className='multiForm'>
						<div className='insertedList'>
							{multiSend.result.map((value: any, index: any) => (
								<div className='receiver' key={index}>
									<p className='nameReceiver'>{value.name}</p>
									<p className='walletReceiver'>{value.address}</p>
									<p className='realReceiver'>{value.realName}</p>
								</div>
							))}
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className='inputConfirmationSide'>
				<InputValue
					defaulValue={typeof sum === 'object' ? sum.amount : sum}
					returnValue={getValue}
					disables={true}
				/>
				<Summary values={values} multi={true} array={multiSend.result} />
				<div className='buttonConfirmationContent'>
					<button
						className='buttonCancel'
						onClick={() => {
							navigate('make');
						}}
					>
						Cancel
					</button>
					<button className='buttonSend' onClick={sendData}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ multiSend }: StateProps): StateProps => ({
	multiSend,
});

const mapDispatchToProps = (dispatch: any) => {
	const actions = {
		multiTransfer,
		updateFinished,
	};

	return {
		action: bindActionCreators(actions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
