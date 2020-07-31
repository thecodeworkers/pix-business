import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { SideBar, ExportButton } from '../../components';

const Commerce: FC<RouteComponentProps> = () => {
  return (
    <div> 
      {/* <SideBar />     */}
      <div style={{marginLeft: '350px', position: 'absolute', right: '10px'}}>
        <ExportButton data={[{name: 'Giber', lastname: 'Jose'}]} flag='csv' name='commerce'/>
      </div>
    </div>
  )
}

export default Commerce;