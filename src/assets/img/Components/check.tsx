import React from 'react';

type checkInterface = {
  width?: string,
  height?: string
}

const Check = (props:checkInterface) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : '13'} height={props.height ? props.height : '9'} viewBox="0 0 13.108 9.591">
    <path id="Path_200" data-name="Path 200" d="M566.762,957.323a1.1,1.1,0,0,1,0,1.557l-7.388,7.388a1.1,1.1,0,0,1-1.558,0l-3.517-3.517a1.1,1.1,0,0,1,1.558-1.557l2.739,2.738,6.609-6.609A1.1,1.1,0,0,1,566.762,957.323Z" transform="translate(-553.977 -957)" fill="#fff"/>
  </svg>
)

export default Check;