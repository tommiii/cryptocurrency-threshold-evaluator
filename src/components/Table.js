import React from 'react';
import _ from 'lodash';

const Table = ({
  label, dark, cols, data,
}) => {
  const renderCols = () => <>
    <thead>
      <tr>
        {_.map(cols, (col, index) => <th key={index} scope="col">{col}</th>)}
      </tr>
    </thead>
  </>;
  const renderValues = () => <>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
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
