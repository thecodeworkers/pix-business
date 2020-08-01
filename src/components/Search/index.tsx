import React from 'react';
import './styles.scss';

const records = [
  {
    'status': 'sent',
    'account': 'Checking',
    'date': '12/05/20',
    'counterparty': 'Income',
    'type': 'Deposit',
    'address': '0xDadlsjf',
    'amount': 66.22
  },
  {
    'status': 'sent',
    'account': 'Checking',
    'date': '12/05/20',
    'counterparty': 'ssssss',
    'type': 'Deposit',
    'address': '0xDadlsjf',
    'amount': 66.22
  },
  {
    'status': 'sent',
    'account': 'Checking',
    'date': '12/05/20',
    'counterparty': 'ssssss',
    'type': 'Deposit',
    'address': '0xDadlsjf',
    'amount': 66.22
  },
  {
    'status': 'sent',
    'account': 'Checking',
    'date': '12/05/20',
    'counterparty': 'ssssss',
    'type': 'Deposit',
    'address': '0xDadlsjf',
    'amount': 66.22
  }
]

const filterRecords = (record: any, searchValue: string) => {
  const keys = Object.keys(record);
  // for(let index = 0; let lengh = keys.length; index++)
  
  return record['status'].toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}

const filterResults = (event: any) => {
  event.preventDefault();
  const currentValue = event.target.value;

  if(currentValue) {
    const results = records.filter((record) => filterRecords(record, currentValue));

    console.log(results);
  }
}

const Search = () => {
  return (
    <div className="_searchContainer">
      <input type="text" onKeyUp={(event: any) => filterResults(event)}/>
    </div>
  )
}

export default Search;
