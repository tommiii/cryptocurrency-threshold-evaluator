import React from 'react';
import { connect } from 'react-redux';
import Select from '../components/Select';
import Input from '../components/Input';
import Table from '../components/Table';
import { fetchData } from '../actions';

class CryptocurrencyThresholdEvaluator extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return <div className="CryptocurrencyThresholdEvaluator">
      <div className="p-3">
        <div className="font-weight-bold text-left mb-5">Cryptocurrency Threshold Evaluator (past 24hrs)</div>
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
        <div className="text-left">
          <small>API REFERENCE: <a href="https://docs.poloniex.com/#returnchartdata">https://docs.poloniex.com/#returnchartdata</a>
          </small>
        </div>
      </div>

    </div >;
  }
}

const mapStateToProps = ({
  tableData, isFetching, isLoaded, error,
}) => ({
  tableData, isFetching, isLoaded, error,
});

export default connect(
  mapStateToProps,
  { fetchData }
)(CryptocurrencyThresholdEvaluator);
