import React from 'react';
import './App.css';
import Select from './Select';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <Select
          label="Enter Threshold"
          values={[
            { value: 'Lisk (LSK)', key: 'LSK' },
            { value: 'Etherium (ETH)', key: 'ETH' },
            { value: 'Monero (XMR)', key: 'XMR' },
            { value: 'Stratis (STRAT)', key: 'STRAT' },
            { value: 'Bitcoin Cash (BCH)', key: 'BCH' },
          ]}
          onChange={(value) => { console.log(value); }}
        />
        <Input
          label="Enter Threshold"
          onChange={(value) => { console.log(value); }}
        />
      </div>
    </div>
  );
}

export default App;
