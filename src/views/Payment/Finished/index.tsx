import React, { FC } from 'react';
import { Header, Summary } from '../../../components';
import { Pixel, Check, Usdc } from '../../../assets/img';
import './styles.scss';
import { StateProps, Props } from './interface';
import { connect } from 'react-redux';

const TransactionCompleted: FC<Props> = ({ finished, navigate = (nav: any) => { } }) => {
	return (
		<div>
			<div className='_transactionCompletedContainer'>
				<div className='_info'>
					<div className='_sectionContainer _cuteImage _containerColor'>
						<div className='_oneItem'>
							<Pixel color={'#2699FB'} width={'120'} height={'88'} />
						</div>
						<div className='_svgImage _oneItem'>
							<Check width={'34'} height={'25'} />
						</div>
						<p className='_oneItem'>Success</p>
					</div>
					<div className='_sectionContainer _cuteAmount'>
						<div className='_containerColor _first'>
							<p className='_to'>Transfer to</p>
							<p className='_motive'>{finished.to}</p>
						</div>
						<div className='_containerColor _second'>
							<p>{finished.amount}</p>
							<div></div>
							<Usdc />
						</div>
						<div className='_containerColor'>
							<Summary
								values={finished.data}
								multi={finished.array}
								array={finished.dataArray}
							/>
						</div>
					</div>
				</div>
				<div className='_actionButton'>
					<button className='_done' onClick={() => navigate('/payments')}>
						<p>Done</p>
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ finished }: StateProps): StateProps => ({
	finished,
});

export default connect(mapStateToProps)(TransactionCompleted);
