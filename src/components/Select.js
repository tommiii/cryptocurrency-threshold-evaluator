import React from 'react';
import _ from 'lodash';

const Select = ({
  values, onChange, label,
}) => {
  const renderValues = _.map(values, ({ value, key }, index) => <option key={index} value={key}>{value}</option>);
  return <>
    <div className="form-group">
      {label && < div className="float-left p-1">{label}</div>}
      <select className='custom-select' onChange={({ target: { value } }) => onChange(value)}>
        {renderValues}
      </select>
    </div>
  </>;
};

export default Select;

Select.defaultProps = {
  values: [],
  onChange: () => { },
  label: null,
};
