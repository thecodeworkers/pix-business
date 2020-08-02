import React, { FC } from 'react';
import { Props } from './interface';
import './styles.scss';

const lineRainbow: Array<string> = [
  '#304352',
  '#24C93F',
  '#0083B0',
  '#FFC837',
  '#AEAEE6',
  '#57D6AF',
  '#DCE35B',
];


const DynamicTable: FC<Props> = ({
  keys = [],
  records = [],
  padding = '5px 15px',
  extraProps = {},
  showSelect = false,
  callback 
}) => {
  return (
    <table
      className="_tableContainer"
      width="100%"
      role="table"
      aria-label="Destinations"
    >
      <thead>
        <tr className="_flexTable" role="rowgroup">
          {keys.map((key: string | null, index: number) => (
            <th
              key={index}
              className="_flexRow _flexBorder"
              role="columnheader"
              style={{ borderBottomColor: lineRainbow[index] }}
            >
              <div className="_backgroundRow" style={{ padding }}>
                {key}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record: any, index: number) => (
          <tr key={index} className="_flexTable" role="rowgroup">
            {/* {
              showSelect ? <tr>new element</tr> : null
            } */}
            {keys.map((key: string, index: number) => (
              <td key={index} className="_flexRow" role="cell">
                <div className="_nodeContainer">
                  <p style={extraProps[key] == 'bold' ? { fontWeight: 'bold', color: '#0D1216' } : {}}>{record[key]}</p>
                </div>
              </td>
            ))}
             {
              showSelect ? <th className='_iconTable' onClick={() => callback('enter')}> x</th> : null
            }

          </tr>

          

        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
