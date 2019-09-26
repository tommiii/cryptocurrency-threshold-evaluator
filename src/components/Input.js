import React from 'react';

const Input = ({
  value, onChange, label, type,
}) => {
  return <>
    <div className="form-group">
      {label && < div className="float-left p-1 font-weight-bold">{label}</div>}
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
