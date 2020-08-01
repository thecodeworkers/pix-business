import React from 'react';
import './styles.scss';

const AddNew = (props: any) => {
  const { action } = props;

  return (
    <button className='_addNewButton' onClick={action}> <span> + </span> Add New</button>
  )
};

export default AddNew;