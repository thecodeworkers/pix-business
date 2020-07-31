import React from 'react';
import './styles.scss';

const borderProps = (borderBottomColor: string) => ({
  borderBottomColor,
  borderBottomWidth: 5,
});

const DynamicTable = () => {
  return (
    <table className="_tableContainer" width="100%" role="table" aria-label="Destinations">
      <thead>
        <tr className="flex-table header" role="rowgroup">
          <th className="_flexRow first" role="columnheader" style={borderProps('red')}>Status</th>
          <th className="_flexRow" role="columnheader">Account</th>
          <th className="_flexRow" role="columnheader">Date</th>
          <th className="_flexRow" role="columnheader">Counterparty</th>
          <th className="_flexRow" role="columnheader">Type</th>
          <th className="_flexRow" role="columnheader">Address</th>
          <th className="_flexRow" role="columnheader">Amount</th>
          <th className="_flexRow" role="columnheader">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex-table row" role="rowgroup">
          <td className="_flexRow first" role="cell">sent</td>
          <td className="_flexRow" role="cell">Checking</td>
          <td className="_flexRow" role="cell">12/05/20</td>
          <td className="_flexRow" role="cell">Employeer</td>
          <td className="_flexRow" role="cell">Income</td>
          <td className="_flexRow" role="cell">0xDfssdsdsf</td>
          <td className="_flexRow" role="cell">66.22</td>
          <td className="_flexRow" role="cell">0.00000</td>
        </tr>

        <tr className="flex-table row" role="rowgroup">
          <td className="_flexRow first" role="cell">sent</td>
          <td className="_flexRow" role="cell">Checking</td>
          <td className="_flexRow" role="cell">12/05/20</td>
          <td className="_flexRow" role="cell">Employeer</td>
          <td className="_flexRow" role="cell">Income</td>
          <td className="_flexRow" role="cell">0xDfssdsdsf</td>
          <td className="_flexRow" role="cell">66.22</td>
          <td className="_flexRow" role="cell">0.00000</td>
        </tr>

        <tr className="flex-table row" role="rowgroup">
          <td className="_flexRow first" role="cell">sent</td>
          <td className="_flexRow" role="cell">Checking</td>
          <td className="_flexRow" role="cell">12/05/20</td>
          <td className="_flexRow" role="cell">Employeer</td>
          <td className="_flexRow" role="cell">Income</td>
          <td className="_flexRow" role="cell">0xDfssdsdsf</td>
          <td className="_flexRow" role="cell">66.22</td>
          <td className="_flexRow" role="cell">0.00000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DynamicTable;
