import React, {useState}  from 'react';
import { Notification, User, Pixel } from '../../assets/img';
import Tabs from '../Tabs';
import './styles.scss';
import { Close } from '../../assets/img';
import Profile from '../../views/Profile';


const Header = ( props: any = false ) => {

   const [ show, setShow ] = useState(false);

  const minitabs = {
		Banking: { route: 'transfer' },
		"Data Analytics": { route: 'send' },
  };

  const openForm = () => {
    setShow(true);
  }
  
  const close = () => {
    setShow(false);
  }


  return (
    <div className="_container">

      <div className="_enterprise _subcontainer">
        <div className="_image">
          <Pixel color={'#2699fb'} width={'32'} height={'24'} />
        </div>
        <div className="_text">Holy chicken</div>
      </div>

      {
        props.tabs ?
        <div className="_tabs">
          <Tabs tabs={minitabs} />
        </div> : null
      } 

      <div className="_actions _subcontainer">
        <div className="_icon"><Notification color='#c9c9c9' width='22' height='27' /></div>
        <div onClick={openForm} className="_icon"><User bcolor='none' color='#c9c9c9' width='22' height='27'/></div>
      </div>

      <div className={show ? '_blur1' : '_blurNone1'} >
        
        <div className={show ? '_showTool1' : '_noneTool1'} >
        
        <div className='_closeTools' onClick={() => close()}>
          <Close />
        </div>
        <div className='_medium'>
        <Profile/> 
        </div>
       
        </div>
        </div>
      
    </div>

    
  )
}

export default Header;
