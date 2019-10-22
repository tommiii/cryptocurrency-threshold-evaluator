/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loading from '../components/Loading';
import Select from '../components/Select';
import Table from '../components/Table';
import { CURRENCY_PAIR_VALUES, PERIOD_VALUES, DATA_FETCH_REQUEST } from '../constants';

const ContentWrapper = styled.div`
  height: 500px;
  ${props => props.isFetching && `&::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    }`}
`;

class CryptocurrencyThresholdEvaluator extends React.Component {
  state = {
    crypto: 'LSK',
    period: 300,
  }

  componentDidMount() {
    const { crypto, period } = this.state;
    const { dispatch } = this.props;
    dispatch({ type: DATA_FETCH_REQUEST, payload: { crypto, period } });
  }

  componentDidUpdate(prevProps, prevState) {
    const { crypto, period } = this.state;
    const { crypto: prevCrypto, period: prevPeriod } = prevState;
    if (crypto !== prevCrypto || period !== prevPeriod) {
      const { dispatch } = this.props;
      dispatch({ type: DATA_FETCH_REQUEST, payload: { crypto, period } });
    }
  }

  render() {
    const {
      isFetching, tableData, error,
    } = this.props;
    const { crypto: currentCrypto } = this.state;
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
        <ContentWrapper isFetching={isFetching}>
          {isFetching && <Loading />}
          < Table
            dark={true}
            data={tableData}
            cols={['close', 'date', 'high', 'low', 'volume']}
          />
        </ContentWrapper>
        {error && <span>Error loading data...</span>}
        <div className="text-left ">
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
  mapStateToProps
)(CryptocurrencyThresholdEvaluator);
