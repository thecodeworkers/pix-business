import React from 'react';
import { Close } from '../../assets/img';
import './styles.scss';

const Tool = (props: any) => {

  const { show, data , callback } = props;

  const close = () => {
    callback();
  }
  return (
    <div className={show ? '_blur' : '_blurNone'} >
      <div className={show ? '_showTool' : '_noneTool'} >
        <div className='_closeTools' onClick={() => close()}>
          <Close />
          <div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Tool;