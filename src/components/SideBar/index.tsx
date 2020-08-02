import React from 'react';
import { Link, navigate } from '@reach/router';
import { Logo, Add, DashboardICon, Analytics, Payment, CounterParties, Activity, Commerce, Logout } from '../../assets/img';
import './styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../store/actions';

const SideBar = ({ action }: any) => {
  const closeCommerce = () => {
    action.logout()
    navigate('/');
  }

  const colors: any = [
    {class: '_one'},
    {class: '_two'},
    {class: '_three'},
    {class: '_four'},
    {class: '_five'},
    {class: '_six'},
    {class: '_seven'}
  ];

  return (
    <div className='_main'>
      <div className='_nav'>
      <div className='_rightContent'>
        <div className='_header'>
          <div className='_logo'>
            <Logo />
          </div>

        </div>
        <div className='_links'>
          <div className='_add'>
            <button>
              <div className='_icon'>
                <Add />
              </div>
               New
               </button>
          </div>

          <ul className='_list'>
            <Link to='/' className='_redirect'> <li> <div className='_icon'><DashboardICon /></div>Dashboard</li></Link>
            <Link to='/data-analitycs' className='_redirect'> <li> <div className='_icon'><Analytics /></div>Data analytics</li> </Link>
            <Link to='/payments' className='_redirect'> <li> <div className='_icon'><Payment /></div>Payments</li> </Link>
            <Link to='/counterparties' className='_redirect'> <li> <div className='_icon'><CounterParties /></div>Counterparties</li> </Link>
            <Link to='/activity' className='_redirect'> <li> <div className='_icon'><Activity /></div>Activity</li> </Link>
            <Link to='/commerce' className='_redirect'> <li> <div className='_icon'><Commerce /></div>Commerce</li> </Link>
          </ul>
        </div>
      </div>

      <div className='_footer'>
        <div className='_parentLogout'>
            <p className='_logout'>Log out</p>
            <div className='_icon' onClick={() => closeCommerce()}>
              <Logout />
            </div>
        </div>
        
        <p className='_copyright'> Copyright 2020 The Pix LLC. All rights reserved.</p>
      </div>

    </div>

    <div className='_line'>
      {
        colors.map((res: any, index: any) => (
            <div key={index} className={res.class}></div>
          )
        ).reverse()
      }
    </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    logout
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SideBar);
