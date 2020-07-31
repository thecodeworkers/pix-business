import React from 'react';

const User = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24.319 27.816">
    <path className="a" d="M0,0H24.13V25.859H0Z" fill={props.bcolor} />
    <g transform="translate(0 1.833)" fill={props.color}>
      <ellipse className="b" cx="6.186" cy="6.186" rx="6.186" ry="6.186" transform="translate(5.584)"/>
      <path className="b" fill={props.color} d="M13.16,15C9.1,15,1,17.037,1,21.08v3.04H25.319V21.08C25.319,17.037,17.218,15,13.16,15Z" transform="translate(-1 1.863)"/>
    </g>
  </svg>
)

export default User;