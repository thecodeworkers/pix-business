import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { SideBar, ExportButton, CodeQR} from '../../components';

const Commerce: FC<RouteComponentProps> = () => {
  return (
    <div> 
      {/* <SideBar />     */}
      <div style={{marginLeft: '350px', position: 'absolute', right: '10px'}}>
        {/* <ExportButton data={[{name: 'Giber', lastname: 'Jose'}]} flag='csv' name='commerce'/> */}
           <CodeQR wallet='23423ewd324'></CodeQR>
      </div>
    </div>
  )
}

export default Commerce;