import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const TableWrapper = styled.div`
  height: 100%;
  overflow: auto;
  display: inline-block;
`;

const Table = ({
  label, dark, cols, data,
}) => {
  const renderCols = () => <>
    <thead>
      <tr>
        {_.map(cols, (col, indexCol) => <th key={indexCol} scope="col">{col}</th>)}
      </tr>
    </thead>
  </>;

  const renderValues = () => <>
    <tbody>{_.map(data, (value, index) => <tr key={index}>
      {_.map(cols, (col, indexValue) => <td key={indexValue}>{value[col]}</td>)}
    </tr>)}</tbody>
  </>;

  return <>
    {label && < div className="float-left p-1">{label}</div>}
    <TableWrapper className="w-100">
      <table
        className={`table${dark ? ' table-dark' : ''}`}>
        {renderCols()}
        {renderValues()}
      </table>
    </TableWrapper>
  </>;
};

export default Table;

Table.defaultProps = {
  label: null,
  dark: false,
  cols: [],
};
