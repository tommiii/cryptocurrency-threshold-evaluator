import React from 'react';

const Input = ({
  value, onChange, label, type,
}) => {
  return <>
    <div className="form-group">
      {label && < div className="text-left font-weight-bold p-1">{label}</div>}
      <input onChange={({ target: { value: newValue } }) => onChange(newValue)} type={type} className="form-control" />
    </div>
  </>;
};

export default Input;

Input.defaultProps = {
  value: '',
  onChange: () => { },
  label: null,
  text: 'text',
};
