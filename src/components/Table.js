import React from 'react';
import _ from 'lodash';

const Table = ({
  label, dark, cols,
}) => {
  const renderCols = () => <>
    <thead>
      <tr>
        {_.map(cols, (col, index) => <th key={index} scope="col">{col}</th>)}
      </tr>
    </thead>
  </>;


  return <>
    <div className="form-group">
      {label && < div className="float-left p-1">{label}</div>}
      <table className={`table${dark ? ' table-dark' : ''}`}>
        {renderCols()}
      </table>

    </div>
  </>;
};

export default Table;

Table.defaultProps = {
  label: null,
  dark: false,
  cols: [],
};
