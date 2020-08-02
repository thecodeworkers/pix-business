import React, { FC } from 'react';
import { BsArrowUpDown } from 'react-icons/bs';
import './styles.scss';
import { Props } from './interface';
import { BankLogo, UsdcCard} from '../../assets/img';
import { navigate } from '@reach/router';

const AccountCard: FC<Props> = ({
	data,
	width = null,
	decorator = true,
	banking = false,
	index = 0
}) => {
	const { address, balances = [], saving } = data;
	
	return (
		<div className={saving ? '_savingAccount' : '_account'} style={width ? { width: width } : {}}>
			{decorator ? (
				<div className='_decorator _pointerCardDetail' onClick={() => navigate('/payments')}>
					<BsArrowUpDown color='#5CD6B1' size='20' />
				</div>
			) : null}
			<div className='_img'>{banking ? <BankLogo /> : <UsdcCard />}</div>
			<div className='_info'>
				<p className='_cardNewtitle'>{banking? data.title :saving ? 'Saving Account' : `Checking Account ${index >= 2 ? index : ''}`}</p>
				<p className='_desc _resizeCard'>{address}</p>
				<p className='_smallBalance'>{balances.length ? `$${balances[0].amount}` : '$0'}</p>
				<p className='_cardBankBalance'>{balances.length ? `${balances[0].amount} USDC` : '0 USDC'}</p>
			</div>
		</div>
	);
};

export default AccountCard;
