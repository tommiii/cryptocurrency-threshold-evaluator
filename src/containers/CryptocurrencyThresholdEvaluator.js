/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'reactjs-simple-spinner';
import Select from '../components/Select';
import Table from '../components/Table';
import { fetchData } from '../actions';
import { CURRENCY_PAIR_VALUES, PERIOD_VALUES } from '../constants';


class CryptocurrencyThresholdEvaluator extends React.Component {
  state = {
    crypto: 'LSK',
    period: 300,
  }

  componentDidMount() {
    const { crypto, period } = this.state;
    this.props.fetchData({ crypto, period });
  }

  componentDidUpdate(prevProps, prevState) {
    const { crypto, period } = this.state;
    const { crypto: prevCrypto, period: prevPeriod } = prevState;
    if (crypto !== prevCrypto || period !== prevPeriod) {
      this.props.fetchData({ crypto, period });
    }
  }

  render() {
    const {
      isFetching, isLoaded, tableData, error,
    } = this.props;
    const { crypto: currentCrypto } = this.state;
    console.log(tableData);
    return <div className="CryptocurrencyThresholdEvaluator">
      <div className="p-3">
        <div className="font-weight-bold text-left mb-5">Cryptocurrency Threshold Evaluator (past 24hrs)</div>
        <div className="d-flex justify-content-between">
          <Select
            label={`Currency Pair (BTC_${currentCrypto})`}
            values={CURRENCY_PAIR_VALUES}
            onChange={crypto => { this.setState({ crypto }); }}
          />
          <Select
            label="Period"
            values={PERIOD_VALUES}
            onChange={period => { this.setState({ period }); }}
          />
        </div>
        {isFetching ? <Spinner size={55} message="Loading..." /> : isLoaded && < Table
          dark={true}
          data={tableData}
          cols={['#', 'Time (5m interval)', 'high', 'low', 'volume']}
        />}
        {error && <span>Error loading data...</span>}
        <div className="text-left">
          <small>API REFERENCE: <a target="_blank" href="https://docs.poloniex.com/#returnchartdata">https://docs.poloniex.com/#returnchartdata</a>
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
