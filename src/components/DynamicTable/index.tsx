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
        <tr className="_flexTable header" role="rowgroup">
          <th className="_flexRow" role="columnheader" style={borderProps('#304352')}>Status</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#24C93F')}>Account</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#0083B0')}>Date</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#FFC837')}>Counterparty</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#AEAEE6')}>Type</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#57D6AF')}>Address</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#DCE35B')}>Amount</th>
          <th className="_flexRow" role="columnheader" style={borderProps('#304352')}>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr className="_flexTable" role="rowgroup">
          <td className="_flexRow first" role="cell">sent</td>
          <td className="_flexRow" role="cell">Checking</td>
          <td className="_flexRow" role="cell">12/05/20</td>
          <td className="_flexRow" role="cell">Employeer</td>
          <td className="_flexRow" role="cell">Income</td>
          <td className="_flexRow" role="cell">0xDfssdsdsf</td>
          <td className="_flexRow" role="cell">66.22</td>
          <td className="_flexRow" role="cell">0.00000</td>
        </tr>

        <tr className="_flexTable" role="rowgroup">
          <td className="_flexRow first" role="cell">sent</td>
          <td className="_flexRow" role="cell">Checking</td>
          <td className="_flexRow" role="cell">12/05/20</td>
          <td className="_flexRow" role="cell">Employeer</td>
          <td className="_flexRow" role="cell">Income</td>
          <td className="_flexRow" role="cell">0xDfssdsdsf</td>
          <td className="_flexRow" role="cell">66.22</td>
          <td className="_flexRow" role="cell">0.00000</td>
        </tr>

        <tr className="_flexTable" role="rowgroup">
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
