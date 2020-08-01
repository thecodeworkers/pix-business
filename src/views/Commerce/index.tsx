import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { SideBar, ExportButton, CodeQR, Header} from '../../components';
import './styles.scss';

const Commerce: FC<RouteComponentProps> = () => {
  return (
    <div className="_principalContainer">
      <Header />
      <div>Hello</div>
    </div>
    // <div> 
    //   {/* <SideBar />     */}
    //   <div style={{marginLeft: '350px', position: 'absolute', right: '10px'}}>
    //     {/* <ExportButton data={[{name: 'Giber', lastname: 'Jose'}]} flag='csv' name='commerce'/> */}
    //        <CodeQR wallet='23423ewd324'></CodeQR>
    //   </div>
    // </div>
  )
}

export default Commerce;