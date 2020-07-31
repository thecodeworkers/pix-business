import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { SideBar } from '../../components';

const Commerce: FC<RouteComponentProps> = () => {
  return (
    <div> 
      <SideBar />    
    </div>
  )
}

export default Commerce;