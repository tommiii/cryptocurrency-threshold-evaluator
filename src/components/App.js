import React from 'react';
import './App.css';
import Select from './Select';
import Input from './Input';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <div className="p-3">
        <div className="float-left font-weight-bold">Cryptocurrency Threshold Evaluator (past 24hrs)</div>
        <div className="d-flex justify-content-between">
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
        <Table
          dark={true}
          cols={['#', 'Time (5m interval)', 'high', 'low', 'volume']}
        />
      </div>
    </div>
  );
}

export default App;
