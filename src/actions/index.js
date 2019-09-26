import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR,
} from '../constants';

export const fetchData = (crypto) => async (dispatch) => {
  dispatch({ type: DATA_FETCH_REQUEST });
  const NOW = new Date().getTime() / 1000;
  const YESTERDAY = NOW - 86400;
  const url = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${crypto}&start=${YESTERDAY}&end=${NOW}&period=300`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: DATA_FETCH_SUCCESS, tableData: data });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR, error });
  }
};
