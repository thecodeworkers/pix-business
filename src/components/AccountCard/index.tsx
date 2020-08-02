import React, { FC } from 'react';
import { BsArrowUpDown } from 'react-icons/bs';
import './styles.scss';
import { Props } from './interface';
import { Usdc, BankBlue, BankLogo, UsdcCard} from '../../assets/img';

const AccountCard: FC<Props> = ({
	data,
	width = null,
	decorator = true,
	banking = false,
}) => {
	return (
		<div className='_account' style={width ? { width: width } : {}}>
			{decorator ? (
				<div className='_decorator'>
					<BsArrowUpDown color='#5CD6B1' size='20' />
				</div>
			) : null}
			<div className='_img'>{banking ? <BankLogo /> : <UsdcCard />}</div>
			<div className='_info'>
				<p className='_cardNewtitle'>{data.title}</p>
				<p className='_desc'>{data.desc}</p>
				<p className='_smallBalance'>12,000.00 </p>
				<p className='_cardBankBalance'>12,000.00 USDC</p>
			</div>
		</div>
	);
};

export default AccountCard;
