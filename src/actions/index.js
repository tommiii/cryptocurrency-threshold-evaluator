import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR,
} from '../constants';

export const fetchData = () => async (dispatch) => {
  dispatch({ type: DATA_FETCH_REQUEST });
  const NOW = new Date().getTime() / 1000;
  const YESTERDAY = NOW - 86400;
  console.log(new Date(NOW));
  console.log(new Date(YESTERDAY));
  const url = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_XMR&start=${YESTERDAY}&end=${NOW}&period=300`;
  try {
    console.log('aaaa');
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({ type: DATA_FETCH_SUCCESS, tableData: data });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR, error });
  }
};
