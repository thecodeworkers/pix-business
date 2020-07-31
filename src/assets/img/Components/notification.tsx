import React from 'react';

const Notification = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 22.363 27.255">
    <path fill={props.color} d="M15.182,29.755a2.8,2.8,0,0,0,2.8-2.8H12.386A2.8,2.8,0,0,0,15.182,29.755Zm8.386-8.386V14.381c0-4.291-2.292-7.883-6.29-8.834V4.6a2.1,2.1,0,0,0-4.193,0v.95C9.074,6.5,6.8,10.076,6.8,14.381v6.989L4,24.164v1.4H26.363v-1.4Z" transform="translate(-4 -2.5)"/>
  </svg>
)

export default Notification;