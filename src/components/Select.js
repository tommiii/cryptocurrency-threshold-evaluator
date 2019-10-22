import React from 'react';
import _ from 'lodash';

import styled from 'styled-components';

const StyledSelct = styled.select`
  :focus {
    border-color: #ffffff !important;
    outline: 0 !important;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25) !important;
  }
`;

const Select = ({
  values, onChange, label,
}) => {
  const renderValues = _.map(values, ({ value, key }, index) => <option key={index} value={key}>{value}</option>);
  return <>
    <div className="form-group">
      {label && < div className="text-left font-weight-bold p-1">{label}</div>}
      <StyledSelct className='custom-select' onChange={({ target: { value } }) => onChange(value)}>
        {renderValues}
      </StyledSelct>
    </div>
  </>;
};

export default Select;

Select.defaultProps = {
  values: [],
  onChange: () => { },
  label: null,
};
